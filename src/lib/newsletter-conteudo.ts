import { db } from "@/lib/prisma";
import { semanaActualISO } from "@/lib/semana";

export async function obterConteudoNewsletter() {
  const semana = semanaActualISO();

  const [emAlta, lancamentos, comBoost, editorialPicks] = await Promise.all([
    db.project.findMany({
      where: { seccao: "em_alta", estado: "publicado" },
      orderBy: { criadoEm: "desc" },
      take: 5,
      select: { id: true, titulo: true, descricao: true },
    }),
    db.project.findMany({
      where: { seccao: "lancamento", estado: "publicado" },
      orderBy: { criadoEm: "desc" },
      take: 5,
      select: { id: true, titulo: true, descricao: true },
    }),
    db.project.findMany({
      where: { boostActivoAte: { gt: new Date() } },
      orderBy: { boostActivoAte: "desc" },
      select: { id: true, titulo: true, descricao: true },
    }),
    db.editorialPick.findMany({
      where: { semanaReferencia: semana },
      include: { project: { select: { id: true, titulo: true, descricao: true } } },
      orderBy: { posicao: "asc" },
    }),
  ]);

  return { semana, emAlta, lancamentos, comBoost, editorialPicks };
}

export type ConteudoNewsletter = Awaited<ReturnType<typeof obterConteudoNewsletter>>;