"use client";

import { useTransition } from "react";
import { confirmarPagamento } from "@/lib/actions/payment-actions";

export function BotaoConfirmarPagamento({ paymentId }: { paymentId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => confirmarPagamento(paymentId))}
      disabled={pending}
      className="rounded bg-[#1D9E75] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
    >
      {pending ? "A confirmar..." : "Confirmar"}
    </button>
  );
}
