/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_email_logAssinaturaSchema,
	crm_email_logEnviaAnexoSchema,
	crm_email_logStatusSchema,
} from "./labels";

export const CRM_EMAIL_LOG_TABLE_NAME = "crm_email_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_email_logBaseSchema = z.object({
	id: z.number(),
	anexos: z.string(),
	assinatura: crm_email_logAssinaturaSchema,
	assunto: z.string(),
	cli_nome: z.string(),
	data_hora: z.string(),
	data_hora_cancelamento: z.string(),
	data_hora_inclusao: z.string(),
	destinatarios: z.string(),
	envia_anexo: crm_email_logEnviaAnexoSchema,
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_email_smtp: z.number(),
	id_modelo_email: z.number(),
	id_receber: z.number(),
	id_responsavel_cancelamento: z.number(),
	id_responsavel_envio: z.number(),
	msg_erro: z.string(),
	password: z.string(),
	smtp_auth: z.string(),
	smtp_host: z.string(),
	smtp_port: z.number(),
	smtp_secure: z.string(),
	status: crm_email_logStatusSchema,
	username: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_email_logSchema = crm_email_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_email_logCreateSchema = crm_email_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_email_logUpdateSchema = crm_email_logCreateSchema.partial();
