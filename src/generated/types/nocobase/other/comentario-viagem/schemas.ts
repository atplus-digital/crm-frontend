/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_COMENTARIO_VIAGEM_TABLE_NAME = "t_comentario_viagem";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const comentario_viagemBaseSchema = z.object({
	id: z.number(),
	f_comentario: z.string(),
	f_comentario_viagem: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const comentario_viagemRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const comentario_viagemSchema = comentario_viagemBaseSchema.extend(
	comentario_viagemRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const comentario_viagemCreateSchema = comentario_viagemSchema.omit({
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
export const comentario_viagemUpdateSchema =
	comentario_viagemCreateSchema.partial();
