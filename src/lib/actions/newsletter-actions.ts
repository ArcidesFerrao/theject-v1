"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";

export type SubscreverGratisState = { error?: string; success?: boolean };

export async function subscreverNewsletterGratis(): Promise<SubscreverGratisState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão." };

  await db.newsletterSubscription.upsert({
    where: { userId: session.user.id },
    update: {},
    create: { userId: session.user.id, estado: "gratis" },
  });

  revalidatePath("/newsletter");
  return { success: true };
}

const pagaSchema = z.object({
  metodo: z.enum(["m-pesa", "e-mola", "transferencia"]),
  referencia: z.string().min(3, "Indica a referência/código da transacção"),
});

export type PedirNewsletterPagaState = {
  error?: string;
  fieldErrors?: Record<string, string>;
  success?: boolean;
};

export async function pedirNewsletterPaga(
  _prevState: PedirNewsletterPagaState,
  formData: FormData
): Promise<PedirNewsletterPagaState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão." };

  const parsed = pagaSchema.safeParse({
    metodo: formData.get("metodo"),
    referencia: formData.get("referencia"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    return { fieldErrors };
  }

  // Garante que já existe subscrição base (grátis) antes de pedir o upgrade —
  // o pagamento só troca o estado para "paga" quando o admin confirmar.
  await db.newsletterSubscription.upsert({
    where: { userId: session.user.id },
    update: {},
    create: { userId: session.user.id, estado: "gratis" },
  });

  await db.payment.create({
    data: {
      tipo: "newsletter",
      userId: session.user.id,
      metodo: parsed.data.metodo,
      referencia: parsed.data.referencia,
      estado: "pendente",
    },
  });

  revalidatePath("/newsletter");
  return { success: true };
}