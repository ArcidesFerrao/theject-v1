"use client";

import { useState, useTransition } from "react";
import { subscreverNewsletterGratis } from "@/lib/actions/newsletter-actions";

export function BotaoSubscreverGratis() {
  const [pending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);

  return (
    <div>
      <button
        onClick={() =>
          startTransition(async () => {
            const resultado = await subscreverNewsletterGratis();
            if (resultado.error) setErro(resultado.error);
          })
        }
        disabled={pending}
        className="rounded bg-[#1D9E75] px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {pending ? "A subscrever..." : "Subscrever grátis"}
      </button>
      {erro && <p className="mt-2 text-sm text-red-600">{erro}</p>}
    </div>
  );
}
