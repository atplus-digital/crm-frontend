/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_TELEGRAM_MARKETING_TABLE_NAME = "crm_telegram_marketing";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_telegram_marketingBaseSchema = z.object({
	id: z.number(),
	chat_id_teste: z.string(),
	mensagem: z.string(),
	token: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_telegram_marketingSchema = crm_telegram_marketingBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_telegram_marketingCreateSchema =
	crm_telegram_marketingSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_telegram_marketingUpdateSchema =
	crm_telegram_marketingCreateSchema.partial();
