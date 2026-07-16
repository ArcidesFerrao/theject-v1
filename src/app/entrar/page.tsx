"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginComCredenciais, type LoginState } from "@/lib/actions/auth-actions";
import { signIn } from "next-auth/react";

const initialState: LoginState = {};

export default function PaginaEntrar() {
  const [state, formAction, pending] = useActionState(loginComCredenciais, initialState);

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-6 px-4">
      <h1 className="text-2xl font-semibold">Entrar no TheJect</h1>

      <form action={formAction} className="flex flex-col gap-4">
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
          />
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded bg-[#1D9E75] px-4 py-2 font-medium text-white disabled:opacity-50"
        >
          {pending ? "A entrar..." : "Entrar"}
        </button>
      </form>

      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span className="h-px flex-1 bg-gray-200" />
        ou
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <button
        onClick={() => signIn("google", { redirectTo: "/" })}
        className="rounded border px-4 py-2 font-medium"
      >
        Continuar com Google
      </button>

      <p className="text-sm text-gray-600">
        Ainda não tens conta?{" "}
        <Link href="/registar" className="font-medium text-[#1D9E75]">
          Criar conta
        </Link>
      </p>
    </main>
  );
}
