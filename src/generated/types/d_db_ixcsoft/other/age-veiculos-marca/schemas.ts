/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AGE_VEICULOS_MARCA_TABLE_NAME = "age_veiculos_marca";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const age_veiculos_marcaBaseSchema = z.object({
	id: z.number(),
	marca: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const age_veiculos_marcaSchema = age_veiculos_marcaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const age_veiculos_marcaCreateSchema = age_veiculos_marcaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const age_veiculos_marcaUpdateSchema =
	age_veiculos_marcaCreateSchema.partial();
