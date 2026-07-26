import type { ConteudoNewsletter } from "@/lib/newsletter-conteudo";

function escapeHtml(texto: string): string {
  return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function itemHtml(projecto: { titulo: string; descricao: string }): string {
  const resumo =
    projecto.descricao.length > 160
      ? `${escapeHtml(projecto.descricao.slice(0, 160))}…`
      : escapeHtml(projecto.descricao);

  return `<li style="margin-bottom:12px;">
    <strong style="font-family:sans-serif;">${escapeHtml(projecto.titulo)}</strong><br/>
    <span style="font-family:sans-serif;color:#555;font-size:14px;">${resumo}</span>
  </li>`;
}

function listaHtml(titulo: string, projectos: { titulo: string; descricao: string }[]): string {
  if (projectos.length === 0) return "";
  return `
    <h2 style="font-family:sans-serif;font-size:18px;">${titulo}</h2>
    <ul style="padding-left:18px;">${projectos.map(itemHtml).join("")}</ul>
  `;
}

export function montarAssuntoNewsletter(semana: string): string {
  return `TheJect — destaques da semana ${semana}`;
}

export function montarHtmlNewsletter(
  conteudo: ConteudoNewsletter,
  { completo }: { completo: boolean }
): string {
  const destaques = conteudo.editorialPicks.length
    ? conteudo.editorialPicks.map((pick) => pick.project)
    : conteudo.emAlta;

  const destaquesMostrados = completo ? destaques : destaques.slice(0, 3);

  const seccoes = [listaHtml("Destaques da semana", destaquesMostrados)];

  if (completo) {
    seccoes.push(listaHtml("Lançamentos recentes", conteudo.lancamentos));
    seccoes.push(listaHtml("Em destaque (Boost)", conteudo.comBoost));
  } else {
    seccoes.push(`
      <p style="font-family:sans-serif;color:#555;font-size:14px;">
        Estás na edição gratuita — a edição completa inclui todos os lançamentos da semana e
        mais destaques. Faz upgrade em theject.mz/newsletter.
      </p>
    `);
  }

  return `
    <div style="max-width:600px;margin:0 auto;">
      <h1 style="font-family:sans-serif;color:#1D9E75;">TheJect</h1>
      ${seccoes.join("")}
    </div>
  `;
}