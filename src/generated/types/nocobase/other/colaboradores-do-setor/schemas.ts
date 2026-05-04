/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const COLABORADORES_DO_SETOR_TABLE_NAME = "colaboradores_do_setor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const colaboradores_do_setorBaseSchema = z.object({
	f_fk_colaboradores_setor_1: z.number(),
	f_fk_colaboradores_setor_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const colaboradores_do_setorSchema = colaboradores_do_setorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const colaboradores_do_setorCreateSchema = colaboradores_do_setorSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const colaboradores_do_setorUpdateSchema =
	colaboradores_do_setorCreateSchema.partial();
