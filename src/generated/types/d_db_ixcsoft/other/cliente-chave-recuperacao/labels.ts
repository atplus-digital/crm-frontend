/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECHAVERECUPERACAO_FIELD_LABELS = {
	codigo_recuperacao: "codigo_recuperacao",
	data_hora_geracao: "data_hora_geracao",
	data_hora_utilizacao: "data_hora_utilizacao",
	id: "id",
	id_chave: "id_chave",
	id_usuario_liberacao: "id_usuario_liberacao",
	local_recuperacao: "local_recuperacao",
	motivo_recuperacao: "motivo_recuperacao",
	status_codigo: "status_codigo",
	tipo_recuperacao: "tipo_recuperacao",
} as const;

export const CLIENTECHAVERECUPERACAO_LOCALRECUPERACAO_LABELS = {
	FN: "FN",
	CA: "CA",
} as const;

export const CLIENTECHAVERECUPERACAO_STATUSCODIGO_LABELS = {
	A: "A",
	U: "U",
	E: "E",
	I: "I",
} as const;

export const CLIENTECHAVERECUPERACAO_TIPORECUPERACAO_LABELS = {
	C: "C",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_chave_recuperacaoLocalRecuperacaoSchema = z.enum(
	["FN", "CA"],
	{
		error: () => ({
			message: "local_recuperacao: valores válidos são [FN, CA]",
		}),
	},
);

export const cliente_chave_recuperacaoStatusCodigoSchema = z.enum(
	["A", "U", "E", "I"],
	{
		error: () => ({
			message: "status_codigo: valores válidos são [A, U, E, I]",
		}),
	},
);

export const cliente_chave_recuperacaoTipoRecuperacaoSchema = z.enum(
	["C", "A"],
	{
		error: () => ({ message: "tipo_recuperacao: valores válidos são [C, A]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteChaveRecuperacaoLocalRecuperacao = z.infer<
	typeof cliente_chave_recuperacaoLocalRecuperacaoSchema
>;

export type ClienteChaveRecuperacaoStatusCodigo = z.infer<
	typeof cliente_chave_recuperacaoStatusCodigoSchema
>;

export type ClienteChaveRecuperacaoTipoRecuperacao = z.infer<
	typeof cliente_chave_recuperacaoTipoRecuperacaoSchema
>;
