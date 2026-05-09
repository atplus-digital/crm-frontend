/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FABRICANTES_TABLE_NAME = "fabricantes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fabricantesBaseSchema = z.object({
	id: z.number(),
	fab_razao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fabricantesSchema = fabricantesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fabricantesCreateSchema = fabricantesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fabricantesUpdateSchema = fabricantesCreateSchema.partial();
