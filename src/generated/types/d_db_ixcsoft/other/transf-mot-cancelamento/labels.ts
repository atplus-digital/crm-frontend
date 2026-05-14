/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TRANSFMOTCANCELAMENTO_FIELD_LABELS = {
	ativo: "ativo",
	finalidade: "finalidade",
	id: "id",
	motivo: "motivo",
} as const;

export const TRANSFMOTCANCELAMENTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TRANSFMOTCANCELAMENTO_FINALIDADE_LABELS = {
	REQ: "REQ",
	TRANSF: "TRANSF",
	ITEM: "ITEM",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const transf_mot_cancelamentoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const transf_mot_cancelamentoFinalidadeSchema = z.enum(
	["REQ", "TRANSF", "ITEM"],
	{
		error: () => ({
			message: "finalidade: valores válidos são [REQ, TRANSF, ITEM]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TransfMotCancelamentoAtivo = z.infer<
	typeof transf_mot_cancelamentoAtivoSchema
>;

export type TransfMotCancelamentoFinalidade = z.infer<
	typeof transf_mot_cancelamentoFinalidadeSchema
>;
