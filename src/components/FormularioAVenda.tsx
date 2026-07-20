"use client";

import { useActionState } from "react";
import {
  publicarAVenda,
  type PublicarProjectoState,
} from "@/lib/actions/projeto-actions";
import { Campo } from "@/components/Campo";

const initialState: PublicarProjectoState = {};

export function FormularioAVenda() {
  const [state, formAction, pending] = useActionState(
    publicarAVenda,
    initialState,
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-6 px-4 py-12">
      <div>
        <h1 className="text-2xl font-semibold">Publicar em À Venda</h1>
        <p className="mt-1 text-sm text-gray-600">
          Negócios lucrativos à venda. É a secção com o processo mais rigoroso —
          verificação de rendimentos, e mais tarde NDA para quem quiser ver
          dados sensíveis. A taxa de listagem fica para quando activarmos os
          pagamentos; por agora a submissão é gratuita.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-4">
        <Campo
          label="Título do negócio"
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
            placeholder="O que faz o negócio, porque está à venda, o que está incluído..."
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
              placeholder="ex: Comércio"
              required
            />
          </Campo>

          <Campo label="Sector" name="sector" erro={state.fieldErrors?.sector}>
            <input
              id="sector"
              name="sector"
              className="w-full rounded border px-3 py-2"
              placeholder="ex: Agro"
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
          label="Faixa de preço"
          name="faixaPreco"
          erro={state.fieldErrors?.faixaPreco}
        >
          <input
            id="faixaPreco"
            name="faixaPreco"
            className="w-full rounded border px-3 py-2"
            placeholder="ex: 500.000 - 800.000 MZN"
            required
          />
          <p className="mt-1 text-xs text-gray-400">
            Aparece publicamente no teaser — os valores exactos ficam para
            depois do NDA.
          </p>
        </Campo>

        <Campo
          label="Prova de rendimentos"
          name="notaVerificacao"
          erro={state.fieldErrors?.notaVerificacao}
        >
          <textarea
            id="notaVerificacao"
            name="notaVerificacao"
            rows={3}
            className="w-full rounded border px-3 py-2"
            placeholder="ex: facturação, lucro, clientes recorrentes..."
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
