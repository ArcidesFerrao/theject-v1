import Link from "next/link";

const mensagemPorEstado: Record<string, string> = {
  nao_iniciado:
    "Esta secção exige verificação de identidade antes de publicares.",
  pendente:
    "Os teus dados de identidade estão em análise pela equipa editorial.",
  rejeitado:
    "A tua verificação de identidade foi rejeitada — corrige e reenvia.",
};

export function BloqueioKyc({ kycStatus }: { kycStatus: string }) {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-4 px-4 py-12">
      <h1 className="text-2xl font-semibold">
        Verificação de identidade necessária
      </h1>
      <p className="text-gray-600">
        {mensagemPorEstado[kycStatus] ??
          "Esta secção exige verificação de identidade aprovada."}
      </p>
      <Link
        href="/dashboard/kyc"
        className="inline-block w-fit rounded bg-[#1D9E75] px-4 py-2 font-medium text-white"
      >
        Ir para a verificação de identidade
      </Link>
    </main>
  );
}
