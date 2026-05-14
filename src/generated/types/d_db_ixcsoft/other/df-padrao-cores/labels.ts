/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFPADRAOCORES_FIELD_LABELS = {
	criacao_automatica: "criacao_automatica",
	id: "id",
	nome: "nome",
	padrao_sistema: "padrao_sistema",
	sequencia_1: "sequencia_1",
	sequencia_2: "sequencia_2",
	total_sequencia_1: "total_sequencia_1",
	total_sequencia_2: "total_sequencia_2",
} as const;

export const DFPADRAOCORES_CRIACAOAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFPADRAOCORES_PADRAOSISTEMA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_padrao_coresCriacaoAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "criacao_automatica: valores válidos são [S, N]" }),
});

export const df_padrao_coresPadraoSistemaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao_sistema: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfPadraoCoresCriacaoAutomatica = z.infer<
	typeof df_padrao_coresCriacaoAutomaticaSchema
>;

export type DfPadraoCoresPadraoSistema = z.infer<
	typeof df_padrao_coresPadraoSistemaSchema
>;
