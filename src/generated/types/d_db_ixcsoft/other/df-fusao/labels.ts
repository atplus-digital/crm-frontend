/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFFUSAO_FIELD_LABELS = {
	bandeja: "bandeja",
	id: "id",
	id_conexao_elemento_destino: "id_conexao_elemento_destino",
	id_conexao_elemento_origem: "id_conexao_elemento_origem",
	id_elemento_destino: "id_elemento_destino",
	id_elemento_origem: "id_elemento_origem",
	id_elemento_principal: "id_elemento_principal",
	id_tipo_conexao: "id_tipo_conexao",
	id_tipo_fusao: "id_tipo_fusao",
	interface_elemento_destino: "interface_elemento_destino",
	interface_elemento_origem: "interface_elemento_origem",
	io_elemento_destino: "io_elemento_destino",
	io_elemento_origem: "io_elemento_origem",
	porta_elemento_destino: "porta_elemento_destino",
	porta_elemento_origem: "porta_elemento_origem",
	tabela_elemento_destino: "tabela_elemento_destino",
	tabela_elemento_origem: "tabela_elemento_origem",
	tabela_elemento_principal: "tabela_elemento_principal",
	tipo_elemento_destino: "tipo_elemento_destino",
	tipo_elemento_origem: "tipo_elemento_origem",
} as const;

export const DFFUSAO_IOELEMENTODESTINO_LABELS = {
	IN: "IN",
	OUT: "OUT",
} as const;

export const DFFUSAO_IOELEMENTOORIGEM_LABELS = {
	IN: "IN",
	OUT: "OUT",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_fusaoIoElementoDestinoSchema = z.enum(["IN", "OUT"], {
	error: () => ({
		message: "io_elemento_destino: valores válidos são [IN, OUT]",
	}),
});

export const df_fusaoIoElementoOrigemSchema = z.enum(["IN", "OUT"], {
	error: () => ({
		message: "io_elemento_origem: valores válidos são [IN, OUT]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfFusaoIoElementoDestino = z.infer<
	typeof df_fusaoIoElementoDestinoSchema
>;

export type DfFusaoIoElementoOrigem = z.infer<
	typeof df_fusaoIoElementoOrigemSchema
>;
