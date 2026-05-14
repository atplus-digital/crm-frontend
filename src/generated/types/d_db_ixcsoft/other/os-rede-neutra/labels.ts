/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OSREDENEUTRA_FIELD_LABELS = {
	caixa_ftth: "caixa_ftth",
	complemento: "complemento",
	data_aceita: "data_aceita",
	data_solicitada: "data_solicitada",
	endereco: "endereco",
	external_id: "external_id",
	id: "id",
	id_cadastro_vinculado: "id_cadastro_vinculado",
	id_cliente_neutro: "id_cliente_neutro",
	id_operador_neutro: "id_operador_neutro",
	mensagem: "mensagem",
	modo_operacao: "modo_operacao",
	plano: "plano",
	porta_ftth: "porta_ftth",
	resource_id: "resource_id",
	status: "status",
	tabela_cadastro_vinculado: "tabela_cadastro_vinculado",
	tipo: "tipo",
} as const;

export const OSREDENEUTRA_MODOOPERACAO_LABELS = {
	C: "C",
	S: "S",
} as const;

export const OSREDENEUTRA_STATUS_LABELS = {
	S: "S",
	E: "E",
	A: "A",
} as const;

export const OSREDENEUTRA_TIPO_LABELS = {
	R: "R",
	A: "A",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const os_rede_neutraModoOperacaoSchema = z.enum(["C", "S"], {
	error: () => ({ message: "modo_operacao: valores válidos são [C, S]" }),
});

export const os_rede_neutraStatusSchema = z.enum(["S", "E", "A"], {
	error: () => ({ message: "status: valores válidos são [S, E, A]" }),
});

export const os_rede_neutraTipoSchema = z.enum(["R", "A", "D"], {
	error: () => ({ message: "tipo: valores válidos são [R, A, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OsRedeNeutraModoOperacao = z.infer<
	typeof os_rede_neutraModoOperacaoSchema
>;

export type OsRedeNeutraStatus = z.infer<typeof os_rede_neutraStatusSchema>;

export type OsRedeNeutraTipo = z.infer<typeof os_rede_neutraTipoSchema>;
