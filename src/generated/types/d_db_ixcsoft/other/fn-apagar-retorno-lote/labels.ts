/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARRETORNOLOTE_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_retorno_loteStatusSchema = z.enum(["A", "P", "F", "E"], {
	error: () => ({ message: "status: valores válidos são [A, P, F, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarRetornoLoteStatus = z.infer<
	typeof fn_apagar_retorno_loteStatusSchema
>;
