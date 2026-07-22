"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";

async function exigirAdmin() {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    throw new Error("Só administradores podem fazer isto.");
  }
  return session.user;
}

// ---------------------------------------------------------------------------
// FOUNDER — submete/reenvia dados de identidade
// ---------------------------------------------------------------------------

const kycSchema = z.object({
  name: z.string().min(3, "Indica o nome completo"),
  biNuit: z.string().min(5, "Número de BI ou NUIT inválido"),
  telefone: z.string().min(9, "Indica um contacto válido"),
});

export type SubmeterKycState = {
  error?: string;
  fieldErrors?: Record<string, string>;
  success?: boolean;
};

export async function submeterKyc(
  _prevState: SubmeterKycState,
  formData: FormData
): Promise<SubmeterKycState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão." };

  const parsed = kycSchema.safeParse({
    name: formData.get("name"),
    biNuit: formData.get("biNuit"),
    telefone: formData.get("telefone"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    return { fieldErrors };
  }

  await db.user.update({
    where: { id: session.user.id },
    data: {
      ...parsed.data,
      kycStatus: "pendente",
      kycMotivoRejeicao: null,
    },
  });

  revalidatePath("/dashboard/kyc");
  return { success: true };
}

// ---------------------------------------------------------------------------
// ADMIN — aprova/rejeita
// ---------------------------------------------------------------------------

export async function aprovarKyc(userId: string) {
  await exigirAdmin();

  await db.user.update({
    where: { id: userId },
    data: { kycStatus: "aprovado", kycMotivoRejeicao: null },
  });

  revalidatePath("/admin/kyc");
}

const rejeicaoKycSchema = z.object({
  userId: z.string().min(1),
  motivo: z.string().min(5, "Explica em poucas palavras porque estás a rejeitar."),
});

export type RejeitarKycState = { error?: string };

export async function rejeitarKyc(
  _prevState: RejeitarKycState,
  formData: FormData
): Promise<RejeitarKycState> {
  await exigirAdmin();

  const parsed = rejeicaoKycSchema.safeParse({
    userId: formData.get("userId"),
    motivo: formData.get("motivo"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  await db.user.update({
    where: { id: parsed.data.userId },
    data: { kycStatus: "rejeitado", kycMotivoRejeicao: parsed.data.motivo },
  });

  revalidatePath("/admin/kyc");
  return {};
}