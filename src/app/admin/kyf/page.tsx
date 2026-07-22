import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
// import  BotaoAprovarKyc  from "@/components/BotaoAprovarKyc";
// import { FormularioRejeitarKyc } from "@/components/FormularioRejeitarKyc";
import { BotaoAprovarKyc } from "@/components/BotaoAprovarKyc";
import { FormularioRejeitarKyc } from "@/components/FormularioRejeitarKyc";

const abas = [
  { estado: "pendente", label: "Pendentes" },
  { estado: "aprovado", label: "Aprovados" },
  { estado: "rejeitado", label: "Rejeitados" },
] as const;

export default async function AdminKycPage({
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

  const utilizadores = await db.user.findMany({
    where: { kycStatus: estadoActivo },
    orderBy: { criadoEm: "desc" },
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex gap-4 text-sm">
        <Link href="/admin/projectos" className="text-gray-500">
          Projectos
        </Link>
        <Link href="/admin/kyc" className="font-medium text-[#1D9E75]">
          KYC
        </Link>
        <Link href="/admin/pagamentos" className="text-gray-500">
          Pagamentos
        </Link>
      </div>

      <h1 className="mt-4 text-2xl font-semibold">Verificação de identidade</h1>
      <p className="mt-1 text-sm text-gray-600">
        Aprova ou rejeita os dados de identidade submetidos pelos founders.
      </p>

      <nav className="mt-6 flex gap-2 border-b">
        {abas.map((aba) => (
          <Link
            key={aba.estado}
            href={`/admin/kyc?estado=${aba.estado}`}
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
        {utilizadores.length === 0 && (
          <p className="text-sm text-gray-500">
            Não há utilizadores nesta categoria.
          </p>
        )}

        {utilizadores.map((utilizador) => (
          <li key={utilizador.id} className="rounded border p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold">
                  {utilizador.name ?? "Sem nome"}
                </h2>
                <p className="text-sm text-gray-600">{utilizador.email}</p>
                <p className="mt-2 text-xs text-gray-400">
                  BI/NUIT: {utilizador.biNuit ?? "—"} · Contacto:{" "}
                  {utilizador.telefone ?? "—"}
                </p>
                {utilizador.kycMotivoRejeicao && (
                  <p className="mt-2 text-xs text-red-600">
                    Motivo da rejeição: {utilizador.kycMotivoRejeicao}
                  </p>
                )}
              </div>

              {estadoActivo === "pendente" && (
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <BotaoAprovarKyc userId={utilizador.id} />
                  <FormularioRejeitarKyc userId={utilizador.id} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
