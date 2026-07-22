"use client";

import { useActionState } from "react";
import {
  submeterPagamento,
  type SubmeterPagamentoState,
} from "@/lib/actions/payment-actions";
import { Campo } from "@/components/Campo";

const initialState: SubmeterPagamentoState = {};

export function PaymentForm({
  tipo,
  projectId,
  titulo,
  descricao,
}: {
  tipo: "listagem_venda" | "boost" | "nda_extra";
  projectId: string;
  titulo: string;
  descricao?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submeterPagamento,
    initialState,
  );

  if (state.success) {
    return (
      <p className="mt-2 rounded bg-emerald-50 p-3 text-sm text-emerald-800">
        Pagamento submetido! A equipa vai confirmar em breve.
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="mt-2 flex flex-col gap-3 rounded border p-4"
    >
      <input type="hidden" name="tipo" value={tipo} />
      <input type="hidden" name="projectId" value={projectId} />

      <div>
        <h3 className="font-semibold">{titulo}</h3>
        {descricao && <p className="mt-1 text-sm text-gray-600">{descricao}</p>}
      </div>

      <Campo label="Método" name="metodo" erro={state.fieldErrors?.metodo}>
        <select
          id="metodo"
          name="metodo"
          className="w-full rounded border px-3 py-2"
          required
        >
          <option value="m-pesa">M-Pesa</option>
          <option value="e-mola">e-Mola</option>
          <option value="transferencia">Transferência bancária</option>
        </select>
      </Campo>

      <Campo
        label="Referência/código da transacção"
        name="referencia"
        erro={state.fieldErrors?.referencia}
      >
        <input
          id="referencia"
          name="referencia"
          className="w-full rounded border px-3 py-2"
          placeholder="ex: código de confirmação M-Pesa"
          required
        />
        <p className="mt-1 text-xs text-gray-400">
          Sem gateway automático por agora — a equipa confirma manualmente
          contra o extracto.
        </p>
      </Campo>

      {state.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded bg-[#1D9E75] px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        {pending ? "A enviar..." : "Submeter pagamento"}
      </button>
    </form>
  );
}
