"use client";

import { useActionState } from "react";
import {
  pedirNewsletterPaga,
  type PedirNewsletterPagaState,
} from "@/lib/actions/newsletter-actions";
import { Campo } from "@/components/Campo";

const initialState: PedirNewsletterPagaState = {};

export function FormularioNewsletterPaga() {
  const [state, formAction, pending] = useActionState(
    pedirNewsletterPaga,
    initialState,
  );

  if (state.success) {
    return (
      <p className="mt-2 rounded bg-emerald-50 p-3 text-sm text-emerald-800">
        Pedido submetido! Assim que a equipa confirmar o pagamento, a tua
        subscrição passa a paga.
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-3 flex flex-col gap-3">
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
      </Campo>

      {state.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded border border-[#1D9E75] px-4 py-2 text-sm font-medium text-[#1D9E75] disabled:opacity-50"
      >
        {pending ? "A enviar..." : "Pedir upgrade pago"}
      </button>
    </form>
  );
}
