"use client";

import { useActionState } from "react";
import {
  publicarEmAlta,
  type PublicarProjectoState,
} from "@/lib/actions/projeto-actions";
import { Campo } from "@/components/Campo";

const initialState: PublicarProjectoState = {};

export function FormularioEmAlta() {
  const [state, formAction, pending] = useActionState(
    publicarEmAlta,
    initialState,
  );

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col gap-6 px-4 py-12">
      <div>
        <h1 className="text-2xl font-semibold">Publicar em Em Alta</h1>
        <p className="mt-1 text-sm text-gray-600">
          Para negócios lucrativos, sem intenção de venda. Esta secção exige
          verificação de rendimentos — descreve como comprovas isso; a equipa
          editorial confirma antes de publicar.
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
            placeholder="O que faz o negócio, há quanto tempo opera, porque está em alta..."
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
              placeholder="ex: Retalho"
              required
            />
          </Campo>

          <Campo label="Sector" name="sector" erro={state.fieldErrors?.sector}>
            <input
              id="sector"
              name="sector"
              className="w-full rounded border px-3 py-2"
              placeholder="ex: Alimentação"
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
          label="Prova de rendimentos"
          name="notaVerificacao"
          erro={state.fieldErrors?.notaVerificacao}
        >
          <textarea
            id="notaVerificacao"
            name="notaVerificacao"
            rows={3}
            className="w-full rounded border px-3 py-2"
            placeholder="ex: facturação mensal média, número de clientes, referências para contacto..."
            required
          />
          <p className="mt-1 text-xs text-gray-400">
            Por agora é só descrição — o upload de documentos comprovativos
            chega numa fase seguinte do produto.
          </p>
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
