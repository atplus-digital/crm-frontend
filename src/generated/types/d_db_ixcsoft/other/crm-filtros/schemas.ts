/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_filtrosFavoritoSchema } from "./labels";

export const CRM_FILTROS_TABLE_NAME = "crm_filtros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_filtrosBaseSchema = z.object({
	id: z.number(),
	favorito: crm_filtrosFavoritoSchema,
	id_template: z.number(),
	id_usuario: z.number(),
	json: z.string(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_filtrosSchema = crm_filtrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_filtrosCreateSchema = crm_filtrosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_filtrosUpdateSchema = crm_filtrosCreateSchema.partial();
