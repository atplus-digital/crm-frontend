/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REMOCAOSPCSERASA_FORMAREMOCAO_LABELS = {
	M: "M",
	R: "R",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const remocao_spc_serasaFormaRemocaoSchema = z.enum(["M", "R"], {
	error: () => ({ message: "forma_remocao: valores válidos são [M, R]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RemocaoSpcSerasaFormaRemocao = z.infer<
	typeof remocao_spc_serasaFormaRemocaoSchema
>;
