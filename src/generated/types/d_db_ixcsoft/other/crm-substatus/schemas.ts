/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_SUBSTATUS_TABLE_NAME = "crm_substatus";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_substatusBaseSchema = z.object({
	id: z.number(),
	cor_mapa: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_substatusSchema = crm_substatusBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_substatusCreateSchema = crm_substatusSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_substatusUpdateSchema = crm_substatusCreateSchema.partial();
