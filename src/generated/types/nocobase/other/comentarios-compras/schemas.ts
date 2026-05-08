/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_COMENTARIOS_COMPRAS_TABLE_NAME = "t_comentarios_compras";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const comentarios_comprasBaseSchema = z.object({
	id: z.number(),
	f_comentarios: z.string(),
	f_comentarios_compras: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const comentarios_comprasRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const comentarios_comprasSchema = comentarios_comprasBaseSchema.extend(
	comentarios_comprasRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const comentarios_comprasCreateSchema = comentarios_comprasSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const comentarios_comprasUpdateSchema =
	comentarios_comprasCreateSchema.partial();
