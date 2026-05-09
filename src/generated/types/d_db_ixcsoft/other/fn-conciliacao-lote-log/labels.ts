/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
