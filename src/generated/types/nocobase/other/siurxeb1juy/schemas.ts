/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_SIURXEB1JUY_TABLE_NAME = "t_siurxeb1juy";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const siurxeb1juyBaseSchema = z.object({
	f_stgjevi19lg: z.number(),
	f_vazo5n0bhe5: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const siurxeb1juySchema = siurxeb1juyBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const siurxeb1juyCreateSchema = siurxeb1juySchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const siurxeb1juyUpdateSchema = siurxeb1juyCreateSchema.partial();
