"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registarUtilizador, type RegistoState } from "@/lib/actions/auth-actions";

const initialState: RegistoState = {};

export default function PaginaRegisto() {
  const [state, formAction, pending] = useActionState(registarUtilizador, initialState);

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-6 px-4">
      <h1 className="text-2xl font-semibold">Criar conta no TheJect</h1>

      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="name">
            Nome
          </label>
          <input id="name" name="name" className="w-full rounded border px-3 py-2" required />
          {state.fieldErrors?.name && (
            <p className="mt-1 text-sm text-red-600">{state.fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded border px-3 py-2"
            required
          />
          {state.fieldErrors?.email && (
            <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded border px-3 py-2"
            required
            minLength={8}
          />
          {state.fieldErrors?.password && (
            <p className="mt-1 text-sm text-red-600">{state.fieldErrors.password}</p>
          )}
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded bg-[#1D9E75] px-4 py-2 font-medium text-white disabled:opacity-50"
        >
          {pending ? "A criar conta..." : "Criar conta"}
        </button>
      </form>

      <p className="text-sm text-gray-600">
        Já tens conta?{" "}
        <Link href="/entrar" className="font-medium text-[#1D9E75]">
          Entrar
        </Link>
      </p>
    </main>
  );
}
