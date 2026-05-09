/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_ANOTACAO_PADRAO_TABLE_NAME = "crm_anotacao_padrao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_anotacao_padraoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_anotacao_padraoSchema = crm_anotacao_padraoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_anotacao_padraoCreateSchema = crm_anotacao_padraoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_anotacao_padraoUpdateSchema =
	crm_anotacao_padraoCreateSchema.partial();
