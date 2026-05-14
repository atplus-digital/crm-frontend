/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NEGATIVACAOSPCSERASA_FIELD_LABELS = {
	codigo_restricao_cnm: "codigo_restricao_cnm",
	data_negativacao: "data_negativacao",
	forma_negativacao: "forma_negativacao",
	forma_remocao: "forma_remocao",
	id: "id",
	id_cliente: "id_cliente",
	id_codigo_restricao: "id_codigo_restricao",
	id_finan: "id_finan",
	id_integracao: "id_integracao",
	msg_negativacao: "msg_negativacao",
	status: "status",
	unique_id: "unique_id",
} as const;

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
