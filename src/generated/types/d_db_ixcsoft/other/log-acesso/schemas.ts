/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOG_ACESSO_TABLE_NAME = "log_acesso";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_acessoBaseSchema = z.object({
	id: z.number(),
	data_acesso: z.string(),
	data_desconexao: z.string(),
	email: z.string(),
	informacoes: z.string(),
	ip_origem: z.string(),
	operador: z.number(),
	porta_origem: z.string(),
	protocolo: z.string(),
	sessao_id: z.string(),
	status: z.string(),
	tempo_conexao: z.string(),
	user_agent: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_acessoSchema = log_acessoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_acessoCreateSchema = log_acessoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_acessoUpdateSchema = log_acessoCreateSchema.partial();
