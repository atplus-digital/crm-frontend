/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRODUTOSTABALAFIPE_TIPO_LABELS = {
	C: "C",
	M: "M",
	V: "V",
} as const;

export const PRODUTOSTABALAFIPE_ZEROKM_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const produtos_tabala_fipeTipoSchema = z.enum(["C", "M", "V"], {
	error: () => ({ message: "tipo: valores válidos são [C, M, V]" }),
});

export const produtos_tabala_fipeZerokmSchema = z.enum(["S", "N"], {
	error: () => ({ message: "zerokm: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProdutosTabalaFipeTipo = z.infer<
	typeof produtos_tabala_fipeTipoSchema
>;

export type ProdutosTabalaFipeZerokm = z.infer<
	typeof produtos_tabala_fipeZerokmSchema
>;
