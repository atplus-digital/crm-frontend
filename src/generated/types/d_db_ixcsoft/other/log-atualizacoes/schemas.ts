/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	log_atualizacoesHomologacaoSchema,
	log_atualizacoesStatusSchema,
} from "./labels";

export const LOG_ATUALIZACOES_TABLE_NAME = "log_atualizacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_atualizacoesBaseSchema = z.object({
	id: z.number(),
	chave_repositorio: z.string(),
	conexao: z.string(),
	data_fim: z.string(),
	data_inicio: z.string(),
	descricao: z.string(),
	etapa: z.string(),
	homologacao: log_atualizacoesHomologacaoSchema,
	id_usuario: z.number(),
	log_suporte: z.string(),
	motivo: z.string(),
	status: log_atualizacoesStatusSchema,
	versao: z.string(),
	versao_anterior: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_atualizacoesSchema = log_atualizacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_atualizacoesCreateSchema = log_atualizacoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_atualizacoesUpdateSchema =
	log_atualizacoesCreateSchema.partial();
