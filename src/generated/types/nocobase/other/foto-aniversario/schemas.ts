/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { aniversariosBaseSchema } from "../aniversarios/schemas";

export const T_FOTO_ANIVERSARIO_TABLE_NAME = "t_foto_aniversario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const foto_aniversarioBaseSchema = z.object({
	id: z.number(),
	f_fk_aniversarios: z.number(),
	extname: z.string(),
	filename: z.string(),
	meta: z.string(),
	mimetype: z.string(),
	path: z.string(),
	preview: z.string(),
	size: z.number(),
	storageId: z.number(),
	title: z.string(),
	url: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const foto_aniversarioRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_aniversarios: z.lazy(() => aniversariosBaseSchema.nullable()),
	storage: z.number().nullable(),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const foto_aniversarioSchema = foto_aniversarioBaseSchema.extend(
	foto_aniversarioRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const foto_aniversarioCreateSchema = foto_aniversarioSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_aniversarios: true,
	id: true,
	storage: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const foto_aniversarioUpdateSchema =
	foto_aniversarioCreateSchema.partial();
