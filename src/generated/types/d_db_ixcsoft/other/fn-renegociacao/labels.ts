/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNRENEGOCIACAO_PREVISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNRENEGOCIACAO_STATUS_LABELS = {
	A: "A",
	F: "F",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_renegociacaoPrevisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [S, N]" }),
});

export const fn_renegociacaoStatusSchema = z.enum(["A", "F", "E"], {
	error: () => ({ message: "status: valores válidos são [A, F, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnRenegociacaoPrevisao = z.infer<
	typeof fn_renegociacaoPrevisaoSchema
>;

export type FnRenegociacaoStatus = z.infer<typeof fn_renegociacaoStatusSchema>;
