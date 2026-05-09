/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NEGATIVACAOSPCSERASA_FORMANEGATIVACAO_LABELS = {
	M: "M",
	R: "R",
} as const;

export const NEGATIVACAOSPCSERASA_FORMAREMOCAO_LABELS = {
	M: "M",
	R: "R",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const negativacao_spc_serasaFormaNegativacaoSchema = z.enum(["M", "R"], {
	error: () => ({ message: "forma_negativacao: valores válidos são [M, R]" }),
});

export const negativacao_spc_serasaFormaRemocaoSchema = z.enum(["M", "R"], {
	error: () => ({ message: "forma_remocao: valores válidos são [M, R]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NegativacaoSpcSerasaFormaNegativacao = z.infer<
	typeof negativacao_spc_serasaFormaNegativacaoSchema
>;

export type NegativacaoSpcSerasaFormaRemocao = z.infer<
	typeof negativacao_spc_serasaFormaRemocaoSchema
>;
