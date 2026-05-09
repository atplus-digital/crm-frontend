/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADDICI_AGRUPARCODIGOFISTEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADDICI_MODELONF_LABELS = {
	21: "21",
	22: "22",
	T: "T",
	62: "62",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_diciAgruparCodigoFistelSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "agrupar_codigo_fistel: valores válidos são [S, N]",
	}),
});

export const rad_diciModeloNfSchema = z.enum(["21", "22", "T", "62"], {
	error: () => ({ message: "modelo_nf: valores válidos são [21, 22, T, 62]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadDiciAgruparCodigoFistel = z.infer<
	typeof rad_diciAgruparCodigoFistelSchema
>;

export type RadDiciModeloNf = z.infer<typeof rad_diciModeloNfSchema>;
