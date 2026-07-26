import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { obterConteudoNewsletter } from "@/lib/newsletter-conteudo";
import { BotaoEnviarNewsletter } from "@/components/BotaoEnviarNewsletter";

export default async function AdminNewsletterPage() {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    redirect("/");
  }

  const [totalGratis, totalPaga, conteudo] = await Promise.all([
    db.newsletterSubscription.count({ where: { estado: "gratis" } }),
    db.newsletterSubscription.count({ where: { estado: "paga" } }),
    obterConteudoNewsletter(),
  ]);

  const { emAlta, lancamentos, comBoost, editorialPicks } = conteudo;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex gap-4 text-sm">
        <Link href="/admin/projectos" className="text-gray-500">
          Projectos
        </Link>
        <Link href="/admin/kyc" className="text-gray-500">
          KYC
        </Link>
        <Link href="/admin/pagamentos" className="text-gray-500">
          Pagamentos
        </Link>
        <Link href="/admin/newsletter" className="font-medium text-[#1D9E75]">
          Newsletter
        </Link>
        <Link href="/admin/curadoria" className="text-gray-500">
          Curadoria
        </Link>
      </div>

      <h1 className="mt-4 text-2xl font-semibold">Newsletter</h1>
      <p className="mt-1 text-sm text-gray-600">
        Grátis recebe um resumo (top 3 destaques); Paga recebe o conteúdo
        completo. Envio a partir de newsletter@evolurelabs.com.
      </p>

      <div className="mt-6 flex gap-6 text-sm">
        <div className="rounded border px-4 py-3">
          <p className="text-2xl font-semibold">{totalGratis}</p>
          <p className="text-gray-500">Subscritores grátis</p>
        </div>
        <div className="rounded border px-4 py-3">
          <p className="text-2xl font-semibold">{totalPaga}</p>
          <p className="text-gray-500">Subscritores pagos</p>
        </div>
      </div>

      <BotaoEnviarNewsletter />

      <section className="mt-8">
        <h2 className="font-semibold">Em destaque (curadoria manual)</h2>
        {editorialPicks.length === 0 ? (
          <p className="mt-1 text-sm text-gray-400">
            Sem destaques manuais esta semana — o email usa os mais recentes de
            Em Alta.
          </p>
        ) : (
          <ul className="mt-2 flex flex-col gap-1 text-sm">
            {editorialPicks.map((pick) => (
              <li key={pick.id}>
                #{pick.posicao} — {pick.project.titulo}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-semibold">
          Com Boost activo (entram automaticamente)
        </h2>
        {comBoost.length === 0 ? (
          <p className="mt-1 text-sm text-gray-400">
            Nenhum projecto com boost activo.
          </p>
        ) : (
          <ul className="mt-2 flex flex-col gap-1 text-sm">
            {comBoost.map((p) => (
              <li key={p.id}>{p.titulo}</li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-semibold">Em Alta (mais recentes)</h2>
        <ul className="mt-2 flex flex-col gap-1 text-sm">
          {emAlta.map((p) => (
            <li key={p.id}>{p.titulo}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-semibold">Lançamentos (mais recentes)</h2>
        <ul className="mt-2 flex flex-col gap-1 text-sm">
          {lancamentos.map((p) => (
            <li key={p.id}>{p.titulo}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
