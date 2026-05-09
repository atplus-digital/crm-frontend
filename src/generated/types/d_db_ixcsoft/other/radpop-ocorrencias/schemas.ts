/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_OCORRENCIAS_TABLE_NAME = "radpop_ocorrencias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_ocorrenciasBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	problema: z.string(),
	solucao: z.string(),
	transmissor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_ocorrenciasSchema = radpop_ocorrenciasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_ocorrenciasCreateSchema = radpop_ocorrenciasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_ocorrenciasUpdateSchema =
	radpop_ocorrenciasCreateSchema.partial();
