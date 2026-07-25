"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { semanaActualISO } from "@/lib/semana";

async function exigirAdmin() {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    throw new Error("Só administradores podem fazer isto.");
  }
}

const adicionarSchema = z.object({
  projectId: z.string().min(1, "Escolhe um projecto"),
  seccao: z.enum(["lancamento", "ideia", "em_alta", "em_funcionamento", "a_venda"]),
  posicao: z.coerce.number().int().min(1, "Mínimo 1").max(20, "Máximo 20"),
});

export type AdicionarPickState = {
  error?: string;
  fieldErrors?: Record<string, string>;
};

export async function adicionarPick(
  _prevState: AdicionarPickState,
  formData: FormData
): Promise<AdicionarPickState> {
  await exigirAdmin();

  const parsed = adicionarSchema.safeParse({
    projectId: formData.get("projectId"),
    seccao: formData.get("seccao"),
    posicao: formData.get("posicao"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    return { fieldErrors };
  }

  const { projectId, seccao, posicao } = parsed.data;

  const projecto = await db.project.findUnique({ where: { id: projectId } });
  if (!projecto || projecto.estado !== "publicado" || projecto.seccao !== seccao) {
    return { error: "Projecto inválido para esta secção (tem de estar publicado)." };
  }

  const semanaReferencia = semanaActualISO();

  const existente = await db.editorialPick.findFirst({
    where: { projectId, seccao, semanaReferencia },
  });
  if (existente) {
    return { error: "Este projecto já está em destaque nesta secção esta semana." };
  }

  await db.editorialPick.create({
    data: { projectId, seccao, posicao, semanaReferencia },
  });

  revalidatePath("/admin/curadoria");
  revalidatePath("/");
  revalidatePath("/admin/newsletter");
  return {};
}

export async function removerPick(pickId: string) {
  await exigirAdmin();

  await db.editorialPick.delete({ where: { id: pickId } });

  revalidatePath("/admin/curadoria");
  revalidatePath("/");
  revalidatePath("/admin/newsletter");
}