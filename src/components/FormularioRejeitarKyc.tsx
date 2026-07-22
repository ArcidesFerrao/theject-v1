"use client";

import { useActionState, useState } from "react";
import { rejeitarKyc, type RejeitarKycState } from "@/lib/actions/kyc-actions";

const initialState: RejeitarKycState = {};

export function FormularioRejeitarKyc({ userId }: { userId: string }) {
  const [aberto, setAberto] = useState(false);
  const [state, formAction, pending] = useActionState(
    rejeitarKyc,
    initialState,
  );

  if (!aberto) {
    return (
      <button
        onClick={() => setAberto(true)}
        className="rounded border border-red-300 px-3 py-1.5 text-sm font-medium text-red-700"
      >
        Rejeitar
      </button>
    );
  }

  return (
    <form action={formAction} className="mt-2 flex flex-col gap-2">
      <input type="hidden" name="userId" value={userId} />
      <textarea
        name="motivo"
        rows={2}
        placeholder="Motivo da rejeição (o utilizador vai ver isto)"
        className="w-full rounded border px-2 py-1 text-sm"
        required
      />
      {state.error && <p className="text-xs text-red-600">{state.error}</p>}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={pending}
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
        >
          {pending ? "A rejeitar..." : "Confirmar rejeição"}
        </button>
        <button
          type="button"
          onClick={() => setAberto(false)}
          className="rounded px-3 py-1.5 text-sm text-gray-600"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
