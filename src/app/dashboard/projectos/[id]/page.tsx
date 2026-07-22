import { notFound } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { PaymentForm } from "@/components/PaymentForm";

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

  const projecto = await db.project.findUnique({ where: { id } });
  if (!projecto || projecto.ownerId !== session.user.id) notFound();

  const pagamentos = await db.payment.findMany({ where: { projectId: id } });
  const pagamentoListagem = pagamentos.find((p) => p.tipo === "listagem_venda");
  const pagamentoBoostPendente = pagamentos.find(
    (p) => p.tipo === "boost" && p.estado === "pendente",
  );
  const boostActivo =
    projecto.boostActivoAte && projecto.boostActivoAte > new Date();

  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
        {estadoLabel[projecto.estado]}
      </span>

      <h1 className="mt-4 text-2xl font-semibold">{projecto.titulo}</h1>
      <p className="mt-2 whitespace-pre-wrap text-gray-700">
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
      </dl>

      <p className="mt-8 text-sm text-gray-500">
        Esta listagem está a aguardar revisão da equipa editorial antes de
        aparecer publicamente no jornal.
      </p>

      {projecto.seccao === "a_venda" && (
        <section className="mt-8">
          <h2 className="font-semibold">Taxa de listagem</h2>
          {pagamentoListagem?.estado === "confirmado" ? (
            <p className="mt-1 text-sm text-emerald-700">
              Pagamento confirmado ✓
            </p>
          ) : pagamentoListagem?.estado === "pendente" ? (
            <p className="mt-1 text-sm text-amber-700">
              Submetido, a aguardar confirmação da equipa.
            </p>
          ) : (
            <>
              <p className="mt-1 text-sm text-gray-600">
                Listagens em À Venda só ficam públicas depois de confirmarmos o
                pagamento da taxa de listagem (2.000–5.000 MZN, conforme o valor
                do negócio).
              </p>
              <PaymentForm
                tipo="listagem_venda"
                projectId={projecto.id}
                titulo="Submeter pagamento da taxa de listagem"
              />
            </>
          )}
        </section>
      )}

      {projecto.estado === "publicado" && (
        <section className="mt-8">
          <h2 className="font-semibold">Boost</h2>
          {boostActivo ? (
            <p className="mt-1 text-sm text-emerald-700">
              Boost activo até{" "}
              {projecto.boostActivoAte!.toLocaleDateString("pt-PT")}
            </p>
          ) : pagamentoBoostPendente ? (
            <p className="mt-1 text-sm text-amber-700">
              Submetido, a aguardar confirmação da equipa.
            </p>
          ) : (
            <PaymentForm
              tipo="boost"
              projectId={projecto.id}
              titulo="Comprar Boost"
              descricao="7 dias em destaque na Home + aparição na newsletter semanal."
            />
          )}
        </section>
      )}

      <Link
        href="/dashboard/kyc"
        className="mt-4 inline-block text-sm font-medium text-[#1D9E75]"
      >
        Ver estado da minha verificação de identidade →
      </Link>
    </main>
  );
}
