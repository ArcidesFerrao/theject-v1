import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";
import { SECCOES } from "@/lib/seccoes";
import { semanaActualISO } from "@/lib/semana";
import { FormularioAdicionarPick } from "@/components/FormularioAdicionarPick";
import { BotaoRemoverPick } from "@/components/BotaoRemoverPick";

export default async function AdminCuradoriaPage() {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    redirect("/");
  }

  const semana = semanaActualISO();

  const seccoesComDados = await Promise.all(
    SECCOES.map(async (seccao) => {
      const picks = await db.editorialPick.findMany({
        where: { seccao: seccao.slug, semanaReferencia: semana },
        include: { project: { select: { titulo: true } } },
        orderBy: { posicao: "asc" },
      });

      const idsEscolhidos = picks.map((p) => p.projectId);

      const candidatos = await db.project.findMany({
        where: {
          seccao: seccao.slug,
          estado: "publicado",
          id: { notIn: idsEscolhidos },
        },
        select: { id: true, titulo: true },
        orderBy: { criadoEm: "desc" },
      });

      return { ...seccao, picks, candidatos };
    }),
  );

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
        <Link href="/admin/newsletter" className="text-gray-500">
          Newsletter
        </Link>
        <Link href="/admin/curadoria" className="font-medium text-[#1D9E75]">
          Curadoria
        </Link>
      </div>

      <h1 className="mt-4 text-2xl font-semibold">Curadoria editorial</h1>
      <p className="mt-1 text-sm text-gray-600">
        Escolhe manualmente os destaques da Home e da Newsletter desta semana (
        {semana}), por secção. Sem destaques definidos, a Home mostra
        automaticamente os mais recentes.
      </p>

      <div className="mt-8 flex flex-col gap-10">
        {seccoesComDados.map((seccao) => (
          <section key={seccao.slug}>
            <h2 className="font-semibold">{seccao.label}</h2>

            {seccao.picks.length === 0 ? (
              <p className="mt-1 text-sm text-gray-400">
                Sem destaques definidos esta semana.
              </p>
            ) : (
              <ol className="mt-2 flex flex-col gap-2">
                {seccao.picks.map((pick) => (
                  <li
                    key={pick.id}
                    className="flex items-center justify-between rounded border p-2 text-sm"
                  >
                    <span>
                      #{pick.posicao} — {pick.project.titulo}
                    </span>
                    <BotaoRemoverPick pickId={pick.id} />
                  </li>
                ))}
              </ol>
            )}

            {seccao.candidatos.length > 0 ? (
              <FormularioAdicionarPick
                seccaoSlug={seccao.slug}
                candidatos={seccao.candidatos}
                proximaPosicao={seccao.picks.length + 1}
              />
            ) : (
              <p className="mt-2 text-xs text-gray-400">
                Não há projectos publicados nesta secção por escolher.
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
