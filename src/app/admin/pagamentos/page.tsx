import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { FormularioRejeitarPagamento } from "./FormularioRejeitarPagamento";

const abas = [
  { estado: "pendente", label: "Pendentes" },
  { estado: "confirmado", label: "Confirmados" },
  { estado: "rejeitado", label: "Rejeitados" },
] as const;

const labelTipo: Record<string, string> = {
  listagem_venda: "Listagem À Venda",
  boost: "Boost",
  nda_extra: "NDA extra",
};

export default async function AdminPagamentosPage({
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
    "pendente") as (typeof abas)[number]["estado"];

  const pagamentos = await db.payment.findMany({
    where: { estado: estadoActivo },
    include: {
      user: { select: { name: true, email: true } },
      project: { select: { titulo: true } },
    },
    orderBy: { criadoEm: "desc" },
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex gap-4 text-sm">
        <Link href="/admin/projectos" className="text-gray-500">
          Projectos
        </Link>
        <Link href="/admin/kyc" className="text-gray-500">
          KYC
        </Link>
        <Link href="/admin/pagamentos" className="font-medium text-[#1D9E75]">
          Pagamentos
        </Link>
      </div>

      <h1 className="mt-4 text-2xl font-semibold">Pagamentos</h1>
      <p className="mt-1 text-sm text-gray-600">
        Confirma contra o extracto M-Pesa/e-Mola/transferência. Confirmar activa
        automaticamente o efeito (Boost fica activo 7 dias; NDA extra dá acesso
        aos dados sensíveis; taxa de listagem desbloqueia a aprovação em
        Projectos).
      </p>

      <nav className="mt-6 flex gap-2 border-b">
        {abas.map((aba) => (
          <Link
            key={aba.estado}
            href={`/admin/pagamentos?estado=${aba.estado}`}
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
        {pagamentos.length === 0 && (
          <p className="text-sm text-gray-500">
            Não há pagamentos nesta categoria.
          </p>
        )}

        {pagamentos.map((pagamento) => (
          <li key={pagamento.id} className="rounded border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase text-gray-400">
                  {labelTipo[pagamento.tipo] ?? pagamento.tipo}
                </span>
                <h2 className="font-semibold">
                  {pagamento.project?.titulo ?? "(sem projecto associado)"}
                </h2>
                <p className="text-sm text-gray-600">
                  {pagamento.user.name ?? pagamento.user.email}
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  {pagamento.metodo} · Referência: {pagamento.referencia} ·{" "}
                  {pagamento.criadoEm.toLocaleDateString("pt-PT")}
                </p>
                {pagamento.motivoRejeicao && (
                  <p className="mt-2 text-xs text-red-600">
                    Motivo da rejeição: {pagamento.motivoRejeicao}
                  </p>
                )}
              </div>

              {estadoActivo === "pendente" && (
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <BotaoConfirmarPagamento paymentId={pagamento.id} />
                  <FormularioRejeitarPagamento paymentId={pagamento.id} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
