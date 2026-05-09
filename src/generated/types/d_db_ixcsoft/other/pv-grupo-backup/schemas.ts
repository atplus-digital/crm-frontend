/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PV_GRUPO_BACKUP_TABLE_NAME = "pv_grupo_backup";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_grupo_backupBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	enviar_notificacao_app: z.string(),
	excluir_apos_dias: z.string(),
	excluir_apos_envio: z.string(),
	ftp_ativo: z.string(),
	ftp_host: z.string(),
	ftp_login: z.string(),
	ftp_pasta: z.string(),
	ftp_porta: z.string(),
	ftp_senha: z.string(),
	id_mensagem_sms: z.number(),
	id_smtp: z.number(),
	id_smtp_backup: z.number(),
	id_telegram_token: z.number(),
	mega_ativo: z.string(),
	mega_login: z.string(),
	mega_pasta: z.string(),
	mega_porta_ssh: z.string(),
	mega_senha: z.string(),
	sms_numero_destino: z.string(),
	smtp_ativo: z.string(),
	smtp_backup_responsavel: z.string(),
	smtp_destino: z.string(),
	telegram_chat_id: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_grupo_backupSchema = pv_grupo_backupBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_grupo_backupCreateSchema = pv_grupo_backupSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_grupo_backupUpdateSchema =
	pv_grupo_backupCreateSchema.partial();
