/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PLANEJAMENTOANALITICO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PLANEJAMENTOANALITICO_PREVISAO_LABELS = {
	M: "M",
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const planejamento_analiticoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const planejamento_analiticoPrevisaoSchema = z.enum(["M", "S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [M, S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PlanejamentoAnaliticoAtivo = z.infer<
	typeof planejamento_analiticoAtivoSchema
>;

export type PlanejamentoAnaliticoPrevisao = z.infer<
	typeof planejamento_analiticoPrevisaoSchema
>;
