/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_campanhaStatusSchema } from "./labels";

export const CRM_CAMPANHA_TABLE_NAME = "crm_campanha";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_campanhaBaseSchema = z.object({
	id: z.number(),
	campanha: z.string(),
	cor_mapa: z.string(),
	data_inicio: z.string(),
	data_termino: z.string(),
	status: crm_campanhaStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_campanhaSchema = crm_campanhaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_campanhaCreateSchema = crm_campanhaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_campanhaUpdateSchema = crm_campanhaCreateSchema.partial();
