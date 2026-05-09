/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	log_backupAcaoSchema,
	log_backupStatusSchema,
	log_backupTipoBackupSchema,
} from "./labels";

export const LOG_BACKUP_TABLE_NAME = "log_backup";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_backupBaseSchema = z.object({
	id: z.number(),
	acao: log_backupAcaoSchema,
	data_inicio: z.string(),
	data_termino: z.string(),
	log_erros: z.string(),
	log_normal: z.string(),
	nome_arquivo: z.string(),
	obs_verificar: z.string(),
	origem_backup: z.string(),
	status: log_backupStatusSchema,
	tamanho_arquivo: z.string(),
	tipo_backup: log_backupTipoBackupSchema,
	tipo_envio: z.string(),
	ultima_atualizacao: z.string(),
	usuario: z.string(),
	usuario_verificou: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_backupSchema = log_backupBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_backupCreateSchema = log_backupSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_backupUpdateSchema = log_backupCreateSchema.partial();
