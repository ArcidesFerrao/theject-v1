import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";

const labelTipo: Record<string, string> = {
  listagem_venda: "Listagem À Venda",
  boost: "Boost (destaque 7 dias)",
  nda_extra: "NDA extra",
};

const estadoCor: Record<string, string> = {
  pendente: "bg-amber-100 text-amber-800",
  confirmado: "bg-emerald-100 text-emerald-800",
  rejeitado: "bg-red-100 text-red-700",
};

export default async function DashboardPagamentosPage() {
  const session = await auth();
  if (!session?.user) redirect("/entrar");

  const pagamentos = await db.payment.findMany({
    where: { userId: session.user.id },
    include: { project: { select: { titulo: true } } },
    orderBy: { criadoEm: "desc" },
  });

  return (
    <main className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-2xl font-semibold">Os teus pagamentos</h1>
      <p className="mt-1 text-sm text-gray-600">
        Submete pagamentos a partir da página do projecto (taxa de listagem À
        Venda, Boost) ou da página de um projecto com NDA. Aqui só vês o
        histórico.
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        {pagamentos.length === 0 && (
          <p className="text-sm text-gray-500">
            Ainda não submeteste nenhum pagamento.
          </p>
        )}
        {pagamentos.map((pagamento) => (
          <li key={pagamento.id} className="rounded border p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium">
                {labelTipo[pagamento.tipo] ?? pagamento.tipo}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${estadoCor[pagamento.estado]}`}
              >
                {pagamento.estado}
              </span>
            </div>
            {pagamento.project && (
              <p className="mt-1 text-xs text-gray-500">
                {pagamento.project.titulo}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-400">
              {pagamento.metodo} · {pagamento.referencia} ·{" "}
              {pagamento.criadoEm.toLocaleDateString("pt-PT")}
            </p>
            {pagamento.motivoRejeicao && (
              <p className="mt-1 text-xs text-red-600">
                Motivo: {pagamento.motivoRejeicao}
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
