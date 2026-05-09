/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SEGMENTO_CRM_TABLE_NAME = "segmento_crm";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const segmento_crmBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const segmento_crmSchema = segmento_crmBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const segmento_crmCreateSchema = segmento_crmSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const segmento_crmUpdateSchema = segmento_crmCreateSchema.partial();
