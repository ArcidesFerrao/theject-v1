"use server";

import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { resend, NEWSLETTER_FROM } from "@/lib/resend";
import { obterConteudoNewsletter } from "@/lib/newsletter-conteudo";
import { montarAssuntoNewsletter, montarHtmlNewsletter } from "@/lib/newsletter-email";

export type EnviarNewsletterState = {
  error?: string;
  success?: boolean;
  enviadosGratis?: number;
  enviadosPaga?: number;
};

// Margem de segurança abaixo do limite típico de destinatários por email.
const TAMANHO_LOTE = 45;

function dividirEmLotes<T>(lista: T[], tamanho: number): T[][] {
  const lotes: T[][] = [];
  for (let i = 0; i < lista.length; i += tamanho) {
    lotes.push(lista.slice(i, i + tamanho));
  }
  return lotes;
}

async function enviarParaLista(
  destinatarioTo: string,
  emails: string[],
  assunto: string,
  html: string
): Promise<number> {
  let enviados = 0;
  for (const lote of dividirEmLotes(emails, TAMANHO_LOTE)) {
    if (lote.length === 0) continue;
    const { error } = await resend.emails.send({
      from: NEWSLETTER_FROM,
      to: destinatarioTo,
      bcc: lote,
      subject: assunto,
      html,
    });
    if (!error) enviados += lote.length;
  }
  return enviados;
}

/**
 * Envia a edição desta semana a todos os subscritores.
 * Grátis recebe um resumo (top 3 destaques); Paga recebe o conteúdo completo.
 *
 * Nota: sem um domínio verificado no Resend, os emails só chegam à caixa da
 * própria conta Resend — os subscritores reais não recebem nada até
 * verificares um domínio.
 */
export async function enviarNewsletter(): Promise<EnviarNewsletterState> {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    return { error: "Só administradores podem fazer isto." };
  }

  if (!process.env.RESEND_API_KEY) {
    return { error: "RESEND_API_KEY não está configurada no .env." };
  }

  const conteudo = await obterConteudoNewsletter();
  const assunto = montarAssuntoNewsletter(conteudo.semana);

  const [subscritoresGratis, subscritoresPaga] = await Promise.all([
    db.newsletterSubscription.findMany({
      where: { estado: "gratis" },
      include: { user: { select: { email: true } } },
    }),
    db.newsletterSubscription.findMany({
      where: { estado: "paga" },
      include: { user: { select: { email: true } } },
    }),
  ]);

  if (subscritoresGratis.length === 0 && subscritoresPaga.length === 0) {
    return { error: "Não há subscritores para enviar." };
  }

  const htmlGratis = montarHtmlNewsletter(conteudo, { completo: false });
  const htmlPaga = montarHtmlNewsletter(conteudo, { completo: true });

  if (!session.user.email) {
    return { error: "A tua conta de admin não tem email associado." };
  }
  const destinatarioTo = session.user.email;

  const enviadosGratis = await enviarParaLista(
    destinatarioTo,
    subscritoresGratis.map((s) => s.user.email),
    assunto,
    htmlGratis
  );
  const enviadosPaga = await enviarParaLista(
    destinatarioTo,
    subscritoresPaga.map((s) => s.user.email),
    assunto,
    htmlPaga
  );

  return { success: true, enviadosGratis, enviadosPaga };
}