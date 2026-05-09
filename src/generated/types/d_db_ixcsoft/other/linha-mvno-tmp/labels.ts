/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LINHAMVNOTMP_API_LABELS = {
	A: "A",
	I: "I",
} as const;

export const LINHAMVNOTMP_PORTABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const linha_mvno_tmpApiSchema = z.enum(["A", "I"], {
	error: () => ({ message: "api: valores válidos são [A, I]" }),
});

export const linha_mvno_tmpPortabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "portabilidade: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LinhaMvnoTmpApi = z.infer<typeof linha_mvno_tmpApiSchema>;

export type LinhaMvnoTmpPortabilidade = z.infer<
	typeof linha_mvno_tmpPortabilidadeSchema
>;
