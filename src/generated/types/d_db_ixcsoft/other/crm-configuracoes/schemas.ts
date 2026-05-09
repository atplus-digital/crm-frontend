/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_configuracoesChatHabilitaSchema } from "./labels";

export const CRM_CONFIGURACOES_TABLE_NAME = "crm_configuracoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_configuracoesBaseSchema = z.object({
	id: z.number(),
	chat_habilita: crm_configuracoesChatHabilitaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_configuracoesSchema = crm_configuracoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_configuracoesCreateSchema = crm_configuracoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_configuracoesUpdateSchema =
	crm_configuracoesCreateSchema.partial();
