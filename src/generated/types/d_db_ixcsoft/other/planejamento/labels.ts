/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PLANEJAMENTO_SUBTIPO_LABELS = {
	DA: "DA",
	DV: "DV",
	DF: "DF",
	CV: "CV",
	CF: "CF",
} as const;

export const PLANEJAMENTO_TIPO_LABELS = {
	A: "A",
	P: "P",
	R: "R",
	D: "D",
	C: "C",
	PT: "PT",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const planejamentoSubtipoSchema = z.enum(
	["DA", "DV", "DF", "CV", "CF"],
	{
		error: () => ({
			message: "subtipo: valores válidos são [DA, DV, DF, CV, CF]",
		}),
	},
);

export const planejamentoTipoSchema = z.enum(["A", "P", "R", "D", "C", "PT"], {
	error: () => ({ message: "tipo: valores válidos são [A, P, R, D, C, PT]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PlanejamentoSubtipo = z.infer<typeof planejamentoSubtipoSchema>;

export type PlanejamentoTipo = z.infer<typeof planejamentoTipoSchema>;
