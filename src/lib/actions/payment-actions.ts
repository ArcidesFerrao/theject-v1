"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { db } from "@/lib/prisma";

async function exigirAdmin() {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    throw new Error("Só administradores podem fazer isto.");
  }
  return session.user;
}

// ---------------------------------------------------------------------------
// SUBMISSÃO — utilizador submete uma referência de pagamento
// ---------------------------------------------------------------------------

const TIPOS_VALIDOS = ["listagem_venda", "boost", "nda_extra"] as const;
type TipoPagamento = (typeof TIPOS_VALIDOS)[number];

const submissaoSchema = z.object({
  tipo: z.enum(TIPOS_VALIDOS),
  projectId: z.string().min(1),
  metodo: z.enum(["m-pesa", "e-mola", "transferencia"]),
  referencia: z.string().min(3, "Indica a referência/código da transacção"),
});

export type SubmeterPagamentoState = {
  error?: string;
  fieldErrors?: Record<string, string>;
  success?: boolean;
};

export async function submeterPagamento(
  _prevState: SubmeterPagamentoState,
  formData: FormData
): Promise<SubmeterPagamentoState> {
  const session = await auth();
  if (!session?.user) return { error: "Precisas de iniciar sessão." };

  const parsed = submissaoSchema.safeParse({
    tipo: formData.get("tipo"),
    projectId: formData.get("projectId"),
    metodo: formData.get("metodo"),
    referencia: formData.get("referencia"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      fieldErrors[String(issue.path[0])] = issue.message;
    }
    return { fieldErrors };
  }

  const { tipo, projectId, metodo, referencia } = parsed.data;

  const projecto = await db.project.findUnique({ where: { id: projectId } });
  if (!projecto) return { error: "Projecto não encontrado." };

  // listagem_venda e boost são pagos pelo dono do projecto; nda_extra é pago
  // por quem quer aceder aos dados sensíveis (não é o dono).
  if ((tipo === "listagem_venda" || tipo === "boost") && projecto.ownerId !== session.user.id) {
    return { error: "Só o dono do projecto pode submeter este pagamento." };
  }

  await db.payment.create({
    data: {
      tipo,
      projectId,
      userId: session.user.id,
      metodo,
      referencia,
      estado: "pendente",
    },
  });

  revalidatePath(`/dashboard/projectos/${projectId}`);
  revalidatePath(`/projectos/${projectId}`);
  return { success: true };
}

// ---------------------------------------------------------------------------
// ADMIN — confirmar (com efeitos por tipo) ou rejeitar
// ---------------------------------------------------------------------------

export async function confirmarPagamento(paymentId: string) {
  const admin = await exigirAdmin();

  const pagamento = await db.payment.findUnique({ where: { id: paymentId } });
  if (!pagamento) throw new Error("Pagamento não encontrado.");

  await db.payment.update({
    where: { id: paymentId },
    data: { estado: "confirmado", confirmadoPor: admin.id, motivoRejeicao: null },
  });

  const tipo = pagamento.tipo as TipoPagamento;

  if (tipo === "boost" && pagamento.projectId) {
    const seteDias = new Date();
    seteDias.setDate(seteDias.getDate() + 7);
    await db.project.update({
      where: { id: pagamento.projectId },
      data: { boostActivoAte: seteDias },
    });
  }

  if (tipo === "nda_extra" && pagamento.projectId) {
    const existente = await db.nDA.findFirst({
      where: { projectId: pagamento.projectId, buyerId: pagamento.userId },
    });
    if (!existente) {
      await db.nDA.create({
        data: {
          projectId: pagamento.projectId,
          buyerId: pagamento.userId,
          ip: "pagamento-confirmado-manualmente",
          pago: true,
        },
      });
    } else if (!existente.pago) {
      await db.nDA.update({ where: { id: existente.id }, data: { pago: true } });
    }
  }

  revalidatePath("/admin/pagamentos");
  if (pagamento.projectId) {
    revalidatePath(`/projectos/${pagamento.projectId}`);
    revalidatePath(`/dashboard/projectos/${pagamento.projectId}`);
  }
}

const rejeicaoSchema = z.object({
  paymentId: z.string().min(1),
  motivo: z.string().min(5, "Explica em poucas palavras porque estás a rejeitar."),
});

export type RejeitarPagamentoState = { error?: string };

export async function rejeitarPagamento(
  _prevState: RejeitarPagamentoState,
  formData: FormData
): Promise<RejeitarPagamentoState> {
  await exigirAdmin();

  const parsed = rejeicaoSchema.safeParse({
    paymentId: formData.get("paymentId"),
    motivo: formData.get("motivo"),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  await db.payment.update({
    where: { id: parsed.data.paymentId },
    data: { estado: "rejeitado", motivoRejeicao: parsed.data.motivo },
  });

  revalidatePath("/admin/pagamentos");
  return {};
}