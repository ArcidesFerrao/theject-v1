/**
 * Devolve a semana ISO-8601 actual no formato "2026-W30".
 * Usado para agrupar os destaques editoriais (EditorialPick) por semana —
 * tanto ao guardar (admin escolhe o destaque) como ao ler (Home/Newsletter).
 */
export function semanaActualISO(data: Date = new Date()): string {
  const d = new Date(Date.UTC(data.getFullYear(), data.getMonth(), data.getDate()));
  const diaDaSemana = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - diaDaSemana);
  const inicioDoAno = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const numeroSemana = Math.ceil(((d.getTime() - inicioDoAno.getTime()) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(numeroSemana).padStart(2, "0")}`;
}