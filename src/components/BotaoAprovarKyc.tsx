"use client";

import { aprovarKyc } from "@/lib/actions/kyc-actions";
import { useTransition } from "react";
// import { aprovarKyc } from "@/lib/actions/kyc-actions";

export function BotaoAprovarKyc({ userId }: { userId: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => aprovarKyc(userId))}
      disabled={pending}
      className="rounded bg-[#1D9E75] px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
    >
      {pending ? "A aprovar..." : "Aprovar"}
    </button>
  );
}
