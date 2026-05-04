/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_IJ93GV1HX9M_TABLE_NAME = "t_ij93gv1hx9m";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ij93gv1hx9mBaseSchema = z.object({
	f_fk_equipamentos_interfaces: z.number(),
	f_fk_interfaces_equipamentos: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ij93gv1hx9mSchema = ij93gv1hx9mBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ij93gv1hx9mCreateSchema = ij93gv1hx9mSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ij93gv1hx9mUpdateSchema = ij93gv1hx9mCreateSchema.partial();
