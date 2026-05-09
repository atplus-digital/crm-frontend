/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_modelo_emailAceiteDigitalSchema,
	crm_modelo_emailAtivoSchema,
	crm_modelo_emailVencerNoAceiteSchema,
} from "./labels";

export const CRM_MODELO_EMAIL_TABLE_NAME = "crm_modelo_email";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_modelo_emailBaseSchema = z.object({
	id: z.number(),
	aceite_digital: crm_modelo_emailAceiteDigitalSchema,
	assunto: z.string(),
	ativo: crm_modelo_emailAtivoSchema,
	cor_botoes: z.string(),
	logotipo: z.string(),
	titulo: z.string(),
	vencer_no_aceite: crm_modelo_emailVencerNoAceiteSchema,
	whatsapp_destinatario: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_modelo_emailSchema = crm_modelo_emailBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_modelo_emailCreateSchema = crm_modelo_emailSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_modelo_emailUpdateSchema =
	crm_modelo_emailCreateSchema.partial();
