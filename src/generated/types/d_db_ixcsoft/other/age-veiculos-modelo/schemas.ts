/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AGE_VEICULOS_MODELO_TABLE_NAME = "age_veiculos_modelo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const age_veiculos_modeloBaseSchema = z.object({
	id: z.number(),
	codigo_fipe: z.string(),
	id_marca: z.number(),
	modelo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const age_veiculos_modeloSchema = age_veiculos_modeloBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const age_veiculos_modeloCreateSchema = age_veiculos_modeloSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const age_veiculos_modeloUpdateSchema =
	age_veiculos_modeloCreateSchema.partial();
