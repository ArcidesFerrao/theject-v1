"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { db } from "@/lib/prisma";
import { auth } from "@/auth";
import { iniciarFluxoDeFounder } from "@/lib/actions/auth-actions";

export type PublicarProjectoState = {
  error?: string;
  fieldErrors?: Record<string, string>;
};

const camposBase = {
  titulo: z.string().min(5, "Título demasiado curto").max(120),
  descricao: z.string().min(30, "Descreve o projecto com um pouco mais de detalhe").max(2000),
  categoria: z.string().min(1, "Escolhe uma categoria"),
  sector: z.string().min(1, "Escolhe um sector"),
  localizacao: z.string().min(2, "Indica a localização"),
};

function lerCamposBase(formData: FormData) {
  return {
    titulo: formData.get("titulo"),
    descricao: formData.get("descricao"),
    categoria: formData.get("categoria"),
    sector: formData.get("sector"),
    localizacao: formData.get("localizacao"),
  };
}

function issuesParaFieldErrors(issues: z.ZodIssue[]) {
  const fieldErrors: Record<string, string> = {};
  for (const issue of issues) {
    fieldErrors[String(issue.path[0])] = issue.message;
  }
  return fieldErrors;
}

/**
 * Primeira vez que este utilizador publica -> promove reader a founder
 * e marca o KYC como pendente. A revisão de conteúdo e de identidade
 * ficam a cargo do admin (painel /admin/projectos).
 */
async function garantirFounder(userId: string, role: string) {
  if (role === "reader") {
    await iniciarFluxoDeFounder(userId);
  }
}

// ---------------------------------------------------------------------------
// LANÇAMENTOS — sem prova de receita/documentação exigida (secção 5 do guia)
// ---------------------------------------------------------------------------

const lancamentoSchema = z.object({
  ...camposBase,
  dataLancamento: z.coerce.date(),
  linkSite: z
    .string()
    .url("Tem de ser um link válido (com https://)")
    .optional()
    .or(z.literal("")),
});

export async function publicarLancamento(
  _prevState: PublicarProjectoState,
  formData: FormData
): Promise<PublicarProjectoState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão para publicar." };

  const parsed = lancamentoSchema.safeParse({
    ...lerCamposBase(formData),
    dataLancamento: formData.get("dataLancamento"),
    linkSite: formData.get("linkSite"),
  });

  if (!parsed.success) return { fieldErrors: issuesParaFieldErrors(parsed.error.issues) };

  await garantirFounder(session.user.id, session.user.role);

  const { linkSite, ...resto } = parsed.data;

  const projecto = await db.project.create({
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

// ---------------------------------------------------------------------------
// IDEIAS — publicação livre, sem verificação formal (secção 5 do guia)
// ---------------------------------------------------------------------------

const ideiaSchema = z.object(camposBase);

export async function publicarIdeia(
  _prevState: PublicarProjectoState,
  formData: FormData
): Promise<PublicarProjectoState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão para publicar." };

  const parsed = ideiaSchema.safeParse(lerCamposBase(formData));
  if (!parsed.success) return { fieldErrors: issuesParaFieldErrors(parsed.error.issues) };

  await garantirFounder(session.user.id, session.user.role);

  const projecto = await db.project.create({
    data: {
      ...parsed.data,
      ownerId: session.user.id,
      seccao: "ideia",
      estado: "pendente_revisao",
      nivelVerificacao: "nao_aplicavel",
    },
  });

  redirect(`/dashboard/projectos/${projecto.id}`);
}

// ---------------------------------------------------------------------------
// EM ALTA — exige verificação de rendimentos (secção 5 do guia).
// Por agora: descrição livre da prova, revista manualmente pelo admin.
// O upload de documentos/checklist estruturado fica para a fase NDA/KYC.
// ---------------------------------------------------------------------------

const emAltaSchema = z.object({
  ...camposBase,
  notaVerificacao: z
    .string()
    .min(20, "Descreve, com algum detalhe, como comprovas os rendimentos (podes anexar provas depois)"),
});

export async function publicarEmAlta(
  _prevState: PublicarProjectoState,
  formData: FormData
): Promise<PublicarProjectoState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão para publicar." };

  const parsed = emAltaSchema.safeParse({
    ...lerCamposBase(formData),
    notaVerificacao: formData.get("notaVerificacao"),
  });
  if (!parsed.success) return { fieldErrors: issuesParaFieldErrors(parsed.error.issues) };

  await garantirFounder(session.user.id, session.user.role);

  const projecto = await db.project.create({
    data: {
      ...parsed.data,
      ownerId: session.user.id,
      seccao: "em_alta",
      estado: "pendente_revisao",
      nivelVerificacao: "nao_verificado",
    },
  });

  redirect(`/dashboard/projectos/${projecto.id}`);
}

// ---------------------------------------------------------------------------
// EMPRESAS EM FUNCIONAMENTO — exige verificação de documentação/actividade
// (não de receita) — secção 5 do guia.
// ---------------------------------------------------------------------------

const emFuncionamentoSchema = z.object({
  ...camposBase,
  notaVerificacao: z
    .string()
    .min(20, "Descreve como comprovas que o negócio está activo (registo, licença, etc.)"),
});

export async function publicarEmFuncionamento(
  _prevState: PublicarProjectoState,
  formData: FormData
): Promise<PublicarProjectoState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão para publicar." };

  const parsed = emFuncionamentoSchema.safeParse({
    ...lerCamposBase(formData),
    notaVerificacao: formData.get("notaVerificacao"),
  });
  if (!parsed.success) return { fieldErrors: issuesParaFieldErrors(parsed.error.issues) };

  await garantirFounder(session.user.id, session.user.role);

  const projecto = await db.project.create({
    data: {
      ...parsed.data,
      ownerId: session.user.id,
      seccao: "em_funcionamento",
      estado: "pendente_revisao",
      nivelVerificacao: "nao_verificado",
    },
  });

  redirect(`/dashboard/projectos/${projecto.id}`);
}

// ---------------------------------------------------------------------------
// À VENDA — verificação de rendimentos + processo mais rigoroso (secção 5).
// NDA e taxa de listagem (2000–5000 MZN, secção 8) ficam para as fases
// NDA/KYC e Pagamentos do roadmap — aqui só cobrimos a submissão do conteúdo.
// ---------------------------------------------------------------------------

const aVendaSchema = z.object({
  ...camposBase,
  notaVerificacao: z
    .string()
    .min(20, "Descreve como comprovas os rendimentos do negócio à venda"),
  faixaPreco: z.string().min(1, "Indica uma faixa de preço, ex: 500.000 - 800.000 MZN"),
});

export async function publicarAVenda(
  _prevState: PublicarProjectoState,
  formData: FormData
): Promise<PublicarProjectoState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão para publicar." };

  const parsed = aVendaSchema.safeParse({
    ...lerCamposBase(formData),
    notaVerificacao: formData.get("notaVerificacao"),
    faixaPreco: formData.get("faixaPreco"),
  });
  if (!parsed.success) return { fieldErrors: issuesParaFieldErrors(parsed.error.issues) };

  await garantirFounder(session.user.id, session.user.role);

  const projecto = await db.project.create({
    data: {
      ...parsed.data,
      ownerId: session.user.id,
      seccao: "a_venda",
      estado: "pendente_revisao",
      nivelVerificacao: "nao_verificado",
    },
  });

  redirect(`/dashboard/projectos/${projecto.id}`);
}