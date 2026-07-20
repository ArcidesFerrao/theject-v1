import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { BotaoAprovar } from "./BotaoAprovar";
import { FormularioRejeitar } from "./FormularioRejeitar";

const abas = [
  { estado: "pendente_revisao", label: "Pendentes" },
  { estado: "publicado", label: "Publicados" },
  { estado: "rejeitado", label: "Rejeitados" },
] as const;

const seccaoLabel: Record<string, string> = {
  lancamento: "Lançamento",
  ideia: "Ideia",
  em_alta: "Em Alta",
  em_funcionamento: "Empresa em Funcionamento",
  a_venda: "À Venda",
};

export default async function AdminProjectosPage({
  searchParams,
}: {
  searchParams: Promise<{ estado?: string }>;
}) {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    redirect("/");
  }

  const { estado } = await searchParams;
  const estadoActivo = (estado ??
    "pendente_revisao") as (typeof abas)[number]["estado"];

  const projectos = await db.project.findMany({
    where: { estado: estadoActivo },
    include: { owner: { select: { name: true, email: true } } },
    orderBy: { criadoEm: "desc" },
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Revisão editorial</h1>
      <p className="mt-1 text-sm text-gray-600">
        Aprova ou rejeita listagens submetidas pelos founders antes de saírem no
        jornal.
      </p>

      <nav className="mt-6 flex gap-2 border-b">
        {abas.map((aba) => (
          <Link
            key={aba.estado}
            href={`/admin/projectos?estado=${aba.estado}`}
            className={`px-3 py-2 text-sm font-medium ${
              estadoActivo === aba.estado
                ? "border-b-2 border-[#1D9E75] text-[#1D9E75]"
                : "text-gray-500"
            }`}
          >
            {aba.label}
          </Link>
        ))}
      </nav>

      <ul className="mt-6 flex flex-col gap-4">
        {projectos.length === 0 && (
          <p className="text-sm text-gray-500">
            Não há projectos nesta categoria.
          </p>
        )}

        {projectos.map((projecto) => (
          <li key={projecto.id} className="rounded border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase text-gray-400">
                  {seccaoLabel[projecto.seccao] ?? projecto.seccao}
                </span>
                <h2 className="font-semibold">{projecto.titulo}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {projecto.descricao}
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Por {projecto.owner.name ?? projecto.owner.email} ·{" "}
                  {projecto.categoria} · {projecto.localizacao}
                </p>
                {projecto.faixaPreco && (
                  <p className="mt-1 text-xs text-gray-500">
                    Faixa de preço: {projecto.faixaPreco}
                  </p>
                )}
                {projecto.notaVerificacao && (
                  <p className="mt-2 rounded bg-gray-50 p-2 text-xs text-gray-600">
                    <span className="font-medium">Prova de verificação: </span>
                    {projecto.notaVerificacao}
                  </p>
                )}
                {projecto.motivoRejeicao && (
                  <p className="mt-2 text-xs text-red-600">
                    Motivo da rejeição: {projecto.motivoRejeicao}
                  </p>
                )}
              </div>

              {estadoActivo === "pendente_revisao" && (
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <BotaoAprovar projectId={projecto.id} />
                  <FormularioRejeitar projectId={projecto.id} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
