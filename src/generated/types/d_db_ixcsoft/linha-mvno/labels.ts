/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LINHAMVNO_API_LABELS = {
	A: "A",
	I: "I",
} as const;

export const LINHAMVNO_ESIM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const LINHAMVNO_PORTABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const linha_mvnoApiSchema = z.enum(["A", "I"], {
	error: () => ({ message: "api: valores válidos são [A, I]" }),
});

export const linha_mvnoEsimSchema = z.enum(["S", "N"], {
	error: () => ({ message: "esim: valores válidos são [S, N]" }),
});

export const linha_mvnoPortabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "portabilidade: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LinhaMvnoApi = z.infer<typeof linha_mvnoApiSchema>;

export type LinhaMvnoEsim = z.infer<typeof linha_mvnoEsimSchema>;

export type LinhaMvnoPortabilidade = z.infer<
	typeof linha_mvnoPortabilidadeSchema
>;
