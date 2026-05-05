/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";

export const T_FOTO_FUNCIONARIOS_TABLE_NAME = "t_foto_funcionarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const foto_funcionariosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	extname: z.string(),
	filename: z.string(),
	meta: z.string(),
	mimetype: z.string(),
	path: z.string(),
	preview: z.string(),
	size: z.number(),
	title: z.string(),
	url: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const foto_funcionariosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	storage: z.number().nullable(),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const foto_funcionariosSchema = foto_funcionariosBaseSchema.extend(
	foto_funcionariosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const foto_funcionariosCreateSchema = foto_funcionariosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_funcionarios: true,
	id: true,
	storage: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const foto_funcionariosUpdateSchema =
	foto_funcionariosCreateSchema.partial();
