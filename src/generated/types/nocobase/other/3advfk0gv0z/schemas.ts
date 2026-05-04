/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_3ADVFK0GV0Z_TABLE_NAME = "t_3advfk0gv0z";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const _3advfk0gv0zBaseSchema = z.object({
	f_fk_insumos_servicos: z.number(),
	f_fk_servicos_insumos: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const _3advfk0gv0zSchema = _3advfk0gv0zBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const _3advfk0gv0zCreateSchema = _3advfk0gv0zSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const _3advfk0gv0zUpdateSchema = _3advfk0gv0zCreateSchema.partial();
