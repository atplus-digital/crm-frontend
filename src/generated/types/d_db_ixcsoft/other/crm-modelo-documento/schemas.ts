/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_MODELO_DOCUMENTO_TABLE_NAME = "crm_modelo_documento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_modelo_documentoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_modelo_documentoSchema = crm_modelo_documentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_modelo_documentoCreateSchema = crm_modelo_documentoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_modelo_documentoUpdateSchema =
	crm_modelo_documentoCreateSchema.partial();
