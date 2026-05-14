/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNCHEQUE_FIELD_LABELS = {
	banco: "banco",
	compensado: "compensado",
	data: "data",
	id: "id",
	id_apagar: "id_apagar",
	id_caixa: "id_caixa",
	id_cliente: "id_cliente",
	id_liquidacao: "id_liquidacao",
	id_recebimento: "id_recebimento",
	nome: "nome",
	numero: "numero",
	predatado: "predatado",
	valor: "valor",
} as const;

export const FNCHEQUE_COMPENSADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_chequeCompensadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "compensado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnChequeCompensado = z.infer<typeof fn_chequeCompensadoSchema>;
