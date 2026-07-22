"use client";

import { useState, useTransition } from "react";
import { aprovarProjecto } from "@/lib/actions/admin-actions";

export function BotaoAprovar({ projectId }: { projectId: string }) {
  const [pending, startTransition] = useTransition();
  const [erro, setErro] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        onClick={() =>
          startTransition(async () => {
            const resultado = await aprovarProjecto(projectId);
            setErro(resultado.error ?? null);
          })
        }
        disabled={pending}
        className="rounded bg-[#1D9E75] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
      >
        {pending ? "A aprovar..." : "Aprovar"}
      </button>
      {erro && (
        <p className="max-w-[200px] text-right text-xs text-red-600">{erro}</p>
      )}
    </div>
  );
}
