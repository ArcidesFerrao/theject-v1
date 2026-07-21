"use client";

import { useState, useTransition } from "react";
import { aceitarNda } from "@/lib/actions/nda-actions";

export function NdaAcceptButton({ projectId }: { projectId: string }) {
  const [pending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);

  return (
    <div className="mt-2">
      <p className="text-sm text-gray-600">
        Este projecto exige a aceitação de um NDA para veres informação
        adicional. O teu primeiro NDA na plataforma é gratuito.
      </p>
      <button
        onClick={() =>
          startTransition(async () => {
            const resultado = await aceitarNda(projectId);
            if (resultado.error) setErro(resultado.error);
          })
        }
        disabled={pending}
        className="mt-2 rounded bg-[#1D9E75] px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {pending ? "A processar..." : "Aceitar NDA e ver dados sensíveis"}
      </button>
      {erro && <p className="mt-2 text-sm text-red-600">{erro}</p>}
    </div>
  );
}
