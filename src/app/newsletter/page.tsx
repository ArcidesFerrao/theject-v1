import Link from "next/link";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { BotaoSubscreverGratis } from "@/components/BotaoSubscreverGratis";
import { FormularioNewsletterPaga } from "@/components/FormularioNewsletterPaga";

export default async function NewsletterPage() {
  const session = await auth();

  const subscricao = session?.user
    ? await db.newsletterSubscription.findUnique({
        where: { userId: session.user.id },
      })
    : null;

  return (
    <main className="mx-auto max-w-lg px-4 py-12">
      <h1 className="text-2xl font-semibold">Newsletter TheJect</h1>
      <p className="mt-1 text-gray-600">
        Todas as semanas: projectos em alta, curadoria editorial e os
        lançamentos mais recentes de Moçambique.
      </p>

      {!session?.user ? (
        <p className="mt-6 text-sm text-gray-600">
          <Link href="/entrar" className="font-medium text-[#1D9E75]">
            Inicia sessão
          </Link>{" "}
          para subscrever.
        </p>
      ) : subscricao?.estado === "paga" ? (
        <p className="mt-6 rounded bg-emerald-50 p-3 text-sm text-emerald-800">
          Já tens a edição completa (paga) ✓
        </p>
      ) : (
        <div className="mt-6 flex flex-col gap-6">
          {subscricao ? (
            <p className="rounded bg-emerald-50 p-3 text-sm text-emerald-800">
              Já estás subscrito na versão gratuita ✓
            </p>
          ) : (
            <BotaoSubscreverGratis />
          )}

          <div className="rounded border p-4">
            <h2 className="font-semibold">Edição completa (paga)</h2>
            <p className="mt-1 text-sm text-gray-600">
              Todos os destaques da semana, sem resumo. Valor a confirmar com a
              equipa.
            </p>
            <FormularioNewsletterPaga />
          </div>
        </div>
      )}
    </main>
  );
}
