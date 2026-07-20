"use client";

import { useActionState } from "react";
import {
  publicarLancamento,
  type PublicarProjectoState,
} from "@/lib/actions/projeto-actions";

const initialState: PublicarProjectoState = {};

export default function PublicarLancamentoPage() {
  const [state, formAction, pending] = useActionState(
    publicarLancamento,
    initialState,
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-6 px-4 py-12">
      <div>
        <h1 className="text-2xl font-semibold">Publicar um Lançamento</h1>
        <p className="mt-1 text-sm text-gray-600">
          Novos projectos a estrear ou prestes a estrear. Depois de submeteres,
          a listagem fica &quot;pendente de revisão&quot; até à aprovação
          editorial.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-4">
        <Campo
          label="Título do projecto"
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
            placeholder="O que é, para quem é, o que resolve..."
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
              placeholder="ex: Fintech"
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
            placeholder="ex: Maputo"
            required
          />
        </Campo>

        <Campo
          label="Data de lançamento"
          name="dataLancamento"
          erro={state.fieldErrors?.dataLancamento}
        >
          <input
            id="dataLancamento"
            name="dataLancamento"
            type="date"
            className="w-full rounded border px-3 py-2"
            required
          />
        </Campo>

        <Campo
          label="Link do site/produto (opcional)"
          name="linkSite"
          erro={state.fieldErrors?.linkSite}
        >
          <input
            id="linkSite"
            name="linkSite"
            type="url"
            className="w-full rounded border px-3 py-2"
            placeholder="https://..."
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

function Campo({
  label,
  name,
  erro,
  children,
}: {
  label: string;
  name: string;
  erro?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      {children}
      {erro && <p className="mt-1 text-sm text-red-600">{erro}</p>}
    </div>
  );
}
