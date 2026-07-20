import Link from "next/link";
import { SECCOES } from "@/lib/seccoes";

const rotaPorSeccao: Record<string, string> = {
  lancamento: "/publicar/lancamento",
  ideia: "/publicar/ideia",
  em_alta: "/publicar/em-alta",
  em_funcionamento: "/publicar/em-funcionamento",
  a_venda: "/publicar/a-venda",
};

export default function PublicarIndexPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-semibold">O que queres publicar?</h1>
      <p className="mt-1 text-gray-600">
        Escolhe a secção que melhor descreve o teu projecto.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        {SECCOES.map((seccao) => (
          <Link
            key={seccao.slug}
            href={rotaPorSeccao[seccao.slug]}
            className="rounded border p-4 transition hover:border-[#1D9E75]"
          >
            <h2 className="font-semibold">{seccao.label}</h2>
            <p className="mt-1 text-sm text-gray-600">{seccao.descricao}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
