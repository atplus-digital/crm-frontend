/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FATURAMIGRACAOLOG_FNARECEBERSTATUS_LABELS = {
	A: "A",
	R: "R",
	P: "P",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fatura_migracao_logFnAreceberStatusSchema = z.enum(
	["A", "R", "P", "C"],
	{
		error: () => ({
			message: "fn_areceber_status: valores válidos são [A, R, P, C]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FaturaMigracaoLogFnAreceberStatus = z.infer<
	typeof fatura_migracao_logFnAreceberStatusSchema
>;
