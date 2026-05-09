/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_funilTipoSchema } from "./labels";

export const CRM_FUNIL_TABLE_NAME = "crm_funil";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_funilBaseSchema = z.object({
	id: z.number(),
	cor_mapa: z.string(),
	funil: z.string(),
	tipo: crm_funilTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_funilSchema = crm_funilBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_funilCreateSchema = crm_funilSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_funilUpdateSchema = crm_funilCreateSchema.partial();
