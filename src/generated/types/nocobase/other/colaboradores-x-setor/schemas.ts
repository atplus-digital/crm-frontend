/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const COLABORADORES_X_SETOR_TABLE_NAME = "colaboradores_x_setor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const colaboradores_x_setorBaseSchema = z.object({
	f_fk_colaboradores_setor_1: z.number(),
	f_fk_colaboradores_setor_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const colaboradores_x_setorSchema = colaboradores_x_setorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const colaboradores_x_setorCreateSchema = colaboradores_x_setorSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const colaboradores_x_setorUpdateSchema =
	colaboradores_x_setorCreateSchema.partial();
