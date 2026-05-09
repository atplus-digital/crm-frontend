/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_sms_logStatusSchema } from "./labels";

export const CRM_SMS_LOG_TABLE_NAME = "crm_sms_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_sms_logBaseSchema = z.object({
	id: z.number(),
	assunto: z.string(),
	cliente_razao: z.string(),
	data_hora: z.string(),
	gateway: z.number(),
	id_cliente: z.number(),
	id_mensagem: z.number(),
	id_responsavel_envio: z.number(),
	status: crm_sms_logStatusSchema,
	telefone_celular: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_sms_logSchema = crm_sms_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_sms_logCreateSchema = crm_sms_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_sms_logUpdateSchema = crm_sms_logCreateSchema.partial();
