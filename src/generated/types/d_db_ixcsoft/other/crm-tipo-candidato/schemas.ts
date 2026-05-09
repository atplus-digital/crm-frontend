/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_tipo_candidatoAtivoSchema } from "./labels";

export const CRM_TIPO_CANDIDATO_TABLE_NAME = "crm_tipo_candidato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_tipo_candidatoBaseSchema = z.object({
	id: z.number(),
	ativo: crm_tipo_candidatoAtivoSchema,
	cor_mapa: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_tipo_candidatoSchema = crm_tipo_candidatoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_tipo_candidatoCreateSchema = crm_tipo_candidatoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_tipo_candidatoUpdateSchema =
	crm_tipo_candidatoCreateSchema.partial();
