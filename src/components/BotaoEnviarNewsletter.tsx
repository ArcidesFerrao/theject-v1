"use client";

import { useState, useTransition } from "react";
import { enviarNewsletter } from "@/lib/actions/newsletter-send-actions";

export function BotaoEnviarNewsletter() {
  const [pending, startTransition] = useTransition();
  const [resultado, setResultado] = useState<{
    erro?: string;
    enviadosGratis?: number;
    enviadosPaga?: number;
  } | null>(null);

  return (
    <div className="mt-3">
      <button
        onClick={() =>
          startTransition(async () => {
            const res = await enviarNewsletter();
            setResultado(
              res.error
                ? { erro: res.error }
                : {
                    enviadosGratis: res.enviadosGratis,
                    enviadosPaga: res.enviadosPaga,
                  },
            );
          })
        }
        disabled={pending}
        className="rounded bg-[#1D9E75] px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {pending ? "A enviar..." : "Enviar newsletter desta semana"}
      </button>

      {resultado?.erro && (
        <p className="mt-2 text-sm text-red-600">{resultado.erro}</p>
      )}
      {resultado && !resultado.erro && (
        <p className="mt-2 text-sm text-emerald-700">
          Enviado a {resultado.enviadosGratis ?? 0} subscritores grátis e{" "}
          {resultado.enviadosPaga ?? 0} pagos.
        </p>
      )}
    </div>
  );
}
