/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_sms_marketingMarketingSchema } from "./labels";

export const CRM_SMS_MARKETING_TABLE_NAME = "crm_sms_marketing";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_sms_marketingBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	form_variaveis: z.string(),
	gateway_sms: z.number(),
	intervalo_tempo_sms: z.number(),
	marketing: crm_sms_marketingMarketingSchema,
	mensagem: z.string(),
	prioridade: z.number(),
	remetente: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_sms_marketingSchema = crm_sms_marketingBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_sms_marketingCreateSchema = crm_sms_marketingSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_sms_marketingUpdateSchema =
	crm_sms_marketingCreateSchema.partial();
