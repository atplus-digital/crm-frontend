/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGATUALIZACOES_FIELD_LABELS = {
	chave_repositorio: "chave_repositorio",
	conexao: "conexao",
	data_fim: "data_fim",
	data_inicio: "data_inicio",
	descricao: "descricao",
	etapa: "etapa",
	homologacao: "homologacao",
	id: "id",
	id_usuario: "id_usuario",
	log_suporte: "log_suporte",
	motivo: "motivo",
	status: "status",
	versao: "versao",
	versao_anterior: "versao_anterior",
} as const;

export const LOGATUALIZACOES_HOMOLOGACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const LOGATUALIZACOES_STATUS_LABELS = {
	AA: "AA",
	FA: "FA",
	AC: "AC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const log_atualizacoesHomologacaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "homologacao: valores válidos são [S, N]" }),
});

export const log_atualizacoesStatusSchema = z.enum(["AA", "FA", "AC"], {
	error: () => ({ message: "status: valores válidos são [AA, FA, AC]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogAtualizacoesHomologacao = z.infer<
	typeof log_atualizacoesHomologacaoSchema
>;

export type LogAtualizacoesStatus = z.infer<
	typeof log_atualizacoesStatusSchema
>;
