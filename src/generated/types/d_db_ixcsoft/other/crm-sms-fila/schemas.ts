/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_SMS_FILA_TABLE_NAME = "crm_sms_fila";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_sms_filaBaseSchema = z.object({
	id: z.number(),
	data_para_envio: z.string(),
	fone: z.string(),
	id_cliente: z.number(),
	id_gateway: z.number(),
	id_mensagem: z.number(),
	mensagem_envio: z.string(),
	prioridade_envio: z.number(),
	regua_cobranca_envios_id: z.number(),
	status_envio_sms: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_sms_filaSchema = crm_sms_filaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_sms_filaCreateSchema = crm_sms_filaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_sms_filaUpdateSchema = crm_sms_filaCreateSchema.partial();
