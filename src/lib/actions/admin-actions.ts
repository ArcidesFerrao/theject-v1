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

export async function aprovarProjecto(projectId: string) {
  await exigirAdmin();

  await db.project.update({
    where: { id: projectId },
    data: {
      estado: "publicado",
      motivoRejeicao: null,
    },
  });

  revalidatePath("/admin/projectos");
}

const rejeicaoSchema = z.object({
  projectId: z.string().min(1),
  motivo: z.string().min(5, "Explica em poucas palavras porque estás a rejeitar."),
});

export type RejeitarState = {
  error?: string;
};

export async function rejeitarProjecto(
  _prevState: RejeitarState,
  formData: FormData
): Promise<RejeitarState> {
  await exigirAdmin();

  const parsed = rejeicaoSchema.safeParse({
    projectId: formData.get("projectId"),
    motivo: formData.get("motivo"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  await db.project.update({
    where: { id: parsed.data.projectId },
    data: {
      estado: "rejeitado",
      motivoRejeicao: parsed.data.motivo,
    },
  });

  revalidatePath("/admin/projectos");
  return {};
}

/**
 * Devolve um projecto rejeitado a "pendente_revisao", para o founder
 * poder corrigir e ser reavaliado sem ter de criar uma listagem nova.
 */
export async function reabrirParaRevisao(projectId: string) {
  await exigirAdmin();

  await db.project.update({
    where: { id: projectId },
    data: { estado: "pendente_revisao", motivoRejeicao: null },
  });

  revalidatePath("/admin/projectos");
}
