/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_COMENTARIOS_COMPRAS_TABLE_NAME = "t_comentarios_compras";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const comentarios_comprasBaseSchema = z.object({
	id: z.number(),
	f_comentarios: z.string(),
	f_comentarios_compras: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const comentarios_comprasRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const comentarios_comprasSchema = comentarios_comprasBaseSchema.merge(
	comentarios_comprasRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const comentarios_comprasCreateSchema = comentarios_comprasSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const comentarios_comprasUpdateSchema =
	comentarios_comprasCreateSchema.partial();
