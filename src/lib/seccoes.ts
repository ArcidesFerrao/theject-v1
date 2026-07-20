export const SECCOES = [
  {
    slug: "lancamento",
    label: "Lançamentos",
    descricao: "Novos projectos a estrear ou prestes a estrear.",
  },
  {
    slug: "ideia",
    label: "Ideias",
    descricao: "Projectos em fase de ideia, à procura de validação ou parceiros.",
  },
  {
    slug: "em_alta",
    label: "Em Alta",
    descricao: "Projectos lucrativos sem intenção de venda — quem domina o mercado.",
  },
  {
    slug: "em_funcionamento",
    label: "Empresas em Funcionamento",
    descricao: "Negócios activos — mais sobre o que fazem do que quanto ganham.",
  },
  {
    slug: "a_venda",
    label: "À Venda",
    descricao: "Projectos lucrativos à venda.",
  },
] as const;

export type SeccaoSlug = (typeof SECCOES)[number]["slug"];

export function labelDaSeccao(slug: string): string {
  return SECCOES.find((s) => s.slug === slug)?.label ?? slug;
}

export function seccaoValida(slug: string): slug is SeccaoSlug {
  return SECCOES.some((s) => s.slug === slug);
}
