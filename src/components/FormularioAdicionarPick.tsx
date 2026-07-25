"use client";

import { useActionState } from "react";
import {
  adicionarPick,
  type AdicionarPickState,
} from "@/lib/actions/curadoria-actions";
import { Campo } from "@/components/Campo";

const initialState: AdicionarPickState = {};

export function FormularioAdicionarPick({
  seccaoSlug,
  candidatos,
  proximaPosicao,
}: {
  seccaoSlug: string;
  candidatos: { id: string; titulo: string }[];
  proximaPosicao: number;
}) {
  const [state, formAction, pending] = useActionState(
    adicionarPick,
    initialState,
  );

  return (
    <form action={formAction} className="mt-3 flex flex-wrap items-end gap-3">
      <input type="hidden" name="seccao" value={seccaoSlug} />

      <Campo
        label="Projecto"
        name="projectId"
        erro={state.fieldErrors?.projectId}
      >
        <select
          id="projectId"
          name="projectId"
          className="rounded border px-2 py-1.5 text-sm"
          required
        >
          <option value="">Escolhe...</option>
          {candidatos.map((c) => (
            <option key={c.id} value={c.id}>
              {c.titulo}
            </option>
          ))}
        </select>
      </Campo>

      <Campo label="Posição" name="posicao" erro={state.fieldErrors?.posicao}>
        <input
          id="posicao"
          name="posicao"
          type="number"
          min={1}
          max={20}
          defaultValue={proximaPosicao}
          className="w-20 rounded border px-2 py-1.5 text-sm"
          required
        />
      </Campo>

      <button
        type="submit"
        disabled={pending}
        className="rounded bg-[#1D9E75] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
      >
        {pending ? "A adicionar..." : "Adicionar destaque"}
      </button>

      {state.error && (
        <p className="w-full text-sm text-red-600">{state.error}</p>
      )}
    </form>
  );
}
