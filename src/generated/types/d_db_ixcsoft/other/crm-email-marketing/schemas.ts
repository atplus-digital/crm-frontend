/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_email_marketingMarketingSchema } from "./labels";

export const CRM_EMAIL_MARKETING_TABLE_NAME = "crm_email_marketing";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_email_marketingBaseSchema = z.object({
	id: z.number(),
	assunto: z.string(),
	conteudo: z.string(),
	descricao: z.string(),
	form_variaveis: z.string(),
	id_email_smtp: z.number(),
	marketing: crm_email_marketingMarketingSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_email_marketingSchema = crm_email_marketingBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_email_marketingCreateSchema = crm_email_marketingSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_email_marketingUpdateSchema =
	crm_email_marketingCreateSchema.partial();
