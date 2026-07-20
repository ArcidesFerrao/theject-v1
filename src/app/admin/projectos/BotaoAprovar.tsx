"use client";

import { useTransition } from "react";
import { aprovarProjecto } from "@/lib/actions/admin-actions";

export function BotaoAprovar({ projectId }: { projectId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => aprovarProjecto(projectId))}
      disabled={pending}
      className="rounded bg-[#1D9E75] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
    >
      {pending ? "A aprovar..." : "Aprovar"}
    </button>
  );
}
