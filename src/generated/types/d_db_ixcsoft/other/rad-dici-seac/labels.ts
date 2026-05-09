/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADDICISEAC_MODELONF_LABELS = {
	21: "21",
	22: "22",
	62: "62",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_dici_seacModeloNfSchema = z.enum(["21", "22", "62", "T"], {
	error: () => ({ message: "modelo_nf: valores válidos são [21, 22, 62, T]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadDiciSeacModeloNf = z.infer<typeof rad_dici_seacModeloNfSchema>;
