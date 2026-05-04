/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_COMENTARIO_VIAGEM_TABLE_NAME = "t_comentario_viagem";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const comentario_viagemBaseSchema = z.object({
	id: z.number(),
	f_comentario: z.string(),
	f_comentario_viagem: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const comentario_viagemRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const comentario_viagemSchema = comentario_viagemBaseSchema.merge(
	comentario_viagemRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const comentario_viagemCreateSchema = comentario_viagemSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const comentario_viagemUpdateSchema =
	comentario_viagemCreateSchema.partial();
