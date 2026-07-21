import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import { labelDaSeccao } from "@/lib/seccoes";
import { auth } from "@/auth";
import { NdaAcceptButton } from "@/components/NdaAcceptButton";
import Link from "next/link";

export default async function ProjectoPublicoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const projecto = await db.project.findUnique({
    where: { id },
    include: { owner: { select: { name: true } } },
  });

  // Não expõe rascunhos/pendentes/rejeitados ao público — só o dono os vê,
  // em /dashboard/projectos/[id].
  if (!projecto || projecto.estado !== "publicado") notFound();
  const session = await auth();
  const seccaoExigeNda =
    projecto.seccao === "em_alta" || projecto.seccao === "a_venda";
  let ndaAceite = false;
  if (seccaoExigeNda && session?.user) {
    const nda = await db.nDA.findFirst({
      where: { projectId: projecto.id, buyerId: session.user.id },
    });
    ndaAceite = !!nda;
  }
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <span className="text-xs font-medium uppercase text-gray-400">
        {labelDaSeccao(projecto.seccao)}
      </span>
      <h1 className="mt-1 text-2xl font-semibold">{projecto.titulo}</h1>

      {projecto.nivelVerificacao === "verificado" && (
        <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
          Verificado
        </span>
      )}

      <p className="mt-4 whitespace-pre-wrap text-gray-700">
        {projecto.descricao}
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-gray-500">Categoria</dt>
          <dd>{projecto.categoria}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Sector</dt>
          <dd>{projecto.sector}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Localização</dt>
          <dd>{projecto.localizacao}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Fundador</dt>
          <dd>{projecto.owner.name ?? "—"}</dd>
        </div>
        {projecto.dataLancamento && (
          <div>
            <dt className="text-gray-500">Data de lançamento</dt>
            <dd>{projecto.dataLancamento.toLocaleDateString("pt-PT")}</dd>
          </div>
        )}
        {projecto.linkSite && (
          <div className="col-span-2">
            <dt className="text-gray-500">Site</dt>
            <dd>
              <a
                href={projecto.linkSite}
                className="text-[#1D9E75]"
                target="_blank"
              >
                {projecto.linkSite}
              </a>
            </dd>
          </div>
        )}
        {projecto.faixaPreco && (
          <div className="col-span-2">
            <dt className="text-gray-500">Faixa de preço</dt>
            <dd>{projecto.faixaPreco}</dd>
          </div>
        )}
        {projecto.dadosSensiveis && (
          <div className="col-span-2">
            <dt className="text-gray-500">Dados sensíveis</dt>
            <dd>{projecto.dadosSensiveis}</dd>
          </div>
        )}
      </dl>
      {seccaoExigeNda && (
        <section className="mt-8 rounded border p-4">
          <h2 className="font-semibold">Dados sensíveis</h2>
          {ndaAceite ? (
            <p className="mt-2 whitespace-pre-wrap text-gray-700">
              {projecto.dadosSensiveis ??
                "O fundador ainda não adicionou dados sensíveis."}
            </p>
          ) : session?.user ? (
            <NdaAcceptButton projectId={projecto.id} />
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              <Link href="/entrar" className="font-medium text-[#1D9E75]">
                Inicia sessão
              </Link>{" "}
              para pedir acesso aos dados sensíveis.
            </p>
          )}
        </section>
      )}
    </main>
  );
}
