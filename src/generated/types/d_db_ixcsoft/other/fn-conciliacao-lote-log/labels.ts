/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNCONCILIACAOLOTELOG_FIELD_LABELS = {
	conciliado_extrato: "conciliado_extrato",
	conciliado_financeiro: "conciliado_financeiro",
	data_hora: "data_hora",
	id: "id",
	id_apagar: "id_apagar",
	id_areceber: "id_areceber",
	id_conciliacao_lote: "id_conciliacao_lote",
	id_operador: "id_operador",
	mensagem: "mensagem",
	status: "status",
	tipo: "tipo",
} as const;

export const FNCONCILIACAOLOTELOG_STATUS_LABELS = {
	S: "S",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_conciliacao_lote_logStatusSchema = z.enum(["S", "F"], {
	error: () => ({ message: "status: valores válidos são [S, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnConciliacaoLoteLogStatus = z.infer<
	typeof fn_conciliacao_lote_logStatusSchema
>;
