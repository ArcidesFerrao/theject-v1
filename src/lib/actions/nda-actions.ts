"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";

export type AceitarNdaState = { error?: string; success?: boolean };

const SECCOES_COM_NDA = ["em_alta", "a_venda"];

export async function aceitarNda(projectId: string): Promise<AceitarNdaState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão." };

  const projecto = await db.project.findUnique({ where: { id: projectId } });
  if (!projecto || projecto.estado !== "publicado") {
    return { error: "Projecto não encontrado." };
  }
  if (!SECCOES_COM_NDA.includes(projecto.seccao)) {
    return { error: "Esta secção não exige NDA." };
  }

  const existente = await db.nDA.findFirst({
    where: { projectId, buyerId: session.user.id },
  });
  if (existente) return { success: true };

  const ndasAnteriores = await db.nDA.count({ where: { buyerId: session.user.id } });
  if (ndasAnteriores > 0) {
    return {
      error:
        "Já usaste o teu NDA gratuito. NDAs seguintes exigem pagamento — essa opção chega na fase de Pagamentos.",
    };
  }

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconhecido";

  await db.nDA.create({
    data: { projectId, buyerId: session.user.id, ip, pago: false },
  });

  revalidatePath(`/projectos/${projectId}`);
  return { success: true };
}