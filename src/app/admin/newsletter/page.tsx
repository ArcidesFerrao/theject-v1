import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";

export default async function AdminNewsletterPage() {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    redirect("/");
  }

  const [
    totalGratis,
    totalPaga,
    emAlta,
    lancamentos,
    comBoost,
    editorialPicks,
  ] = await Promise.all([
    db.newsletterSubscription.count({ where: { estado: "gratis" } }),
    db.newsletterSubscription.count({ where: { estado: "paga" } }),
    db.project.findMany({
      where: { seccao: "em_alta", estado: "publicado" },
      orderBy: { criadoEm: "desc" },
      take: 5,
    }),
    db.project.findMany({
      where: { seccao: "lancamento", estado: "publicado" },
      orderBy: { criadoEm: "desc" },
      take: 5,
    }),
    db.project.findMany({
      where: { boostActivoAte: { gt: new Date() } },
      orderBy: { boostActivoAte: "desc" },
    }),
    db.editorialPick.findMany({
      include: { project: { select: { titulo: true } } },
      orderBy: { semanaReferencia: "desc" },
      take: 10,
    }),
  ]);

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
      </div>

      <h1 className="mt-4 text-2xl font-semibold">Newsletter</h1>
      <p className="mt-1 text-sm text-gray-600">
        Sem envio automático configurado ainda (falta ligar um serviço de email)
        — usa isto como conteúdo pronto a copiar para a edição desta semana.
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

      <section className="mt-8">
        <h2 className="font-semibold">Em destaque (curadoria manual)</h2>
        {editorialPicks.length === 0 ? (
          <p className="mt-1 text-sm text-gray-400">
            Ainda sem destaques manuais definidos — falta a UI de curadoria
            (EditorialPick).
          </p>
        ) : (
          <ul className="mt-2 flex flex-col gap-1 text-sm">
            {editorialPicks.map((pick) => (
              <li key={pick.id}>
                {pick.project.titulo} — {pick.semanaReferencia}
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
