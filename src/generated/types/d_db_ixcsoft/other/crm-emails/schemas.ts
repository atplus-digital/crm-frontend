/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_emailsAssinaturaSchema } from "./labels";

export const CRM_EMAILS_TABLE_NAME = "crm_emails";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_emailsBaseSchema = z.object({
	id: z.number(),
	assinatura: crm_emailsAssinaturaSchema,
	assunto: z.string(),
	corpo: z.string(),
	data_hora: z.string(),
	destinatarios: z.string(),
	id_cliente: z.number(),
	id_email_smtp: z.number(),
	id_modelo_email: z.number(),
	id_negociacao: z.number(),
	id_responsavel: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_emailsSchema = crm_emailsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_emailsCreateSchema = crm_emailsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_emailsUpdateSchema = crm_emailsCreateSchema.partial();
