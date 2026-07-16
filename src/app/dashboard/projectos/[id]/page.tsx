import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const estadoLabel: Record<string, string> = {
  rascunho: "Rascunho",
  pendente_revisao: "Pendente de revisão editorial",
  publicado: "Publicado",
  rejeitado: "Rejeitado",
  arquivado: "Arquivado",
};

export default async function ProjectoDetalhePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user) notFound();

  const projecto = await prisma.project.findUnique({ where: { id } });
  if (!projecto || projecto.ownerId !== session.user.id) notFound();

  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
        {estadoLabel[projecto.estado]}
      </span>

      <h1 className="mt-4 text-2xl font-semibold">{projecto.titulo}</h1>
      <p className="mt-2 whitespace-pre-wrap text-gray-700">{projecto.descricao}</p>

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
              <a href={projecto.linkSite} className="text-[#1D9E75]" target="_blank">
                {projecto.linkSite}
              </a>
            </dd>
          </div>
        )}
      </dl>

      <p className="mt-8 text-sm text-gray-500">
        Esta listagem está a aguardar revisão da equipa editorial antes de aparecer
        publicamente no jornal.
      </p>
    </main>
  );
}
