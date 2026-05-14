/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PLANEJAMENTOANALITICO_FIELD_LABELS = {
	ativo: "ativo",
	auxiliar: "auxiliar",
	classificacao: "classificacao",
	conta: "conta",
	conta_dominio: "conta_dominio",
	id: "id",
	id_planejamento: "id_planejamento",
	id_planejamento_analitico_finan: "id_planejamento_analitico_finan",
	planejamento_analitico: "planejamento_analitico",
	previsao: "previsao",
	sequencia_planejamento_analitico: "sequencia_planejamento_analitico",
	tipo: "tipo",
} as const;

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
