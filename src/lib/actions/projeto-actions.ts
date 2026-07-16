"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { iniciarFluxoDeFounder } from "@/lib/actions/auth-actions";
import { redirect } from "next/navigation";

const lancamentoSchema = z.object({
  titulo: z.string().min(5, "Título demasiado curto").max(120),
  descricao: z.string().min(30, "Descreve o projecto com um pouco mais de detalhe").max(2000),
  categoria: z.string().min(1, "Escolhe uma categoria"),
  sector: z.string().min(1, "Escolhe um sector"),
  localizacao: z.string().min(2, "Indica a localização"),
  dataLancamento: z.coerce.date(),
  linkSite: z
    .string()
    .url("Tem de ser um link válido (com https://)")
    .optional()
    .or(z.literal("")),
});

export type PublicarLancamentoState = {
  error?: string;
  fieldErrors?: Record<string, string>;
};

export async function publicarLancamento(
  _prevState: PublicarLancamentoState,
  formData: FormData
): Promise<PublicarLancamentoState> {
  const session = await auth();
  if (!session?.user) {
    return { error: "Precisas de iniciar sessão para publicar." };
  }

  const parsed = lancamentoSchema.safeParse({
    titulo: formData.get("titulo"),
    descricao: formData.get("descricao"),
    categoria: formData.get("categoria"),
    sector: formData.get("sector"),
    localizacao: formData.get("localizacao"),
    dataLancamento: formData.get("dataLancamento"),
    linkSite: formData.get("linkSite"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    return { fieldErrors };
  }

  // Primeira vez que este utilizador publica -> promove reader a founder
  // e marca o KYC como pendente (revisão fica a cargo do admin).
  if (session.user.role === "reader") {
    await iniciarFluxoDeFounder(session.user.id);
  }

  const { linkSite, ...resto } = parsed.data;

  const projecto = await prisma.project.create({
    data: {
      ...resto,
      linkSite: linkSite || null,
      ownerId: session.user.id,
      seccao: "lancamento",
      estado: "pendente_revisao", // taxa de publicação fica para a fase "Pagamentos"
      nivelVerificacao: "nao_aplicavel",
    },
  });

  redirect(`/dashboard/projectos/${projecto.id}`);
}
