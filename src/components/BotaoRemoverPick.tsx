"use client";

import { useTransition } from "react";
import { removerPick } from "@/lib/actions/curadoria-actions";

export function BotaoRemoverPick({ pickId }: { pickId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => removerPick(pickId))}
      disabled={pending}
      className="text-xs font-medium text-red-600 disabled:opacity-50"
    >
      {pending ? "A remover..." : "Remover"}
    </button>
  );
}
