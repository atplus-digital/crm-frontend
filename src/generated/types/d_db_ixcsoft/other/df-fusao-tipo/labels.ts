/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFFUSAOTIPO_CRIACAOAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFFUSAOTIPO_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_fusao_tipoCriacaoAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "criacao_automatica: valores válidos são [S, N]" }),
});

export const df_fusao_tipoStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfFusaoTipoCriacaoAutomatica = z.infer<
	typeof df_fusao_tipoCriacaoAutomaticaSchema
>;

export type DfFusaoTipoStatus = z.infer<typeof df_fusao_tipoStatusSchema>;
