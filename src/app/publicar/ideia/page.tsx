"use client";

import { useActionState } from "react";
import {
  publicarIdeia,
  type PublicarProjectoState,
} from "@/lib/actions/projeto-actions";
import { Campo } from "@/components/Campo";

const initialState: PublicarProjectoState = {};

export default function PublicarIdeiaPage() {
  const [state, formAction, pending] = useActionState(
    publicarIdeia,
    initialState,
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-6 px-4 py-12">
      <div>
        <h1 className="text-2xl font-semibold">Publicar uma Ideia</h1>
        <p className="mt-1 text-sm text-gray-600">
          Projectos em fase de ideia, à procura de validação ou parceiros.
          Publicação livre, sem verificação formal — vai directo a revisão
          editorial.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-4">
        <Campo
          label="Título da ideia"
          name="titulo"
          erro={state.fieldErrors?.titulo}
        >
          <input
            id="titulo"
            name="titulo"
            className="w-full rounded border px-3 py-2"
            required
          />
        </Campo>

        <Campo
          label="Descrição"
          name="descricao"
          erro={state.fieldErrors?.descricao}
        >
          <textarea
            id="descricao"
            name="descricao"
            rows={5}
            className="w-full rounded border px-3 py-2"
            placeholder="Que problema resolve, que validação já tens, o que procuras (parceiros, feedback, capital)..."
            required
          />
        </Campo>

        <div className="grid grid-cols-2 gap-4">
          <Campo
            label="Categoria"
            name="categoria"
            erro={state.fieldErrors?.categoria}
          >
            <input
              id="categoria"
              name="categoria"
              className="w-full rounded border px-3 py-2"
              placeholder="ex: Tecnologia"
              required
            />
          </Campo>

          <Campo label="Sector" name="sector" erro={state.fieldErrors?.sector}>
            <input
              id="sector"
              name="sector"
              className="w-full rounded border px-3 py-2"
              placeholder="ex: Educação"
              required
            />
          </Campo>
        </div>

        <Campo
          label="Localização"
          name="localizacao"
          erro={state.fieldErrors?.localizacao}
        >
          <input
            id="localizacao"
            name="localizacao"
            className="w-full rounded border px-3 py-2"
            placeholder="ex: Beira"
            required
          />
        </Campo>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded bg-[#1D9E75] px-4 py-2 font-medium text-white disabled:opacity-50"
        >
          {pending ? "A submeter..." : "Submeter para revisão"}
        </button>
      </form>
    </main>
  );
}
