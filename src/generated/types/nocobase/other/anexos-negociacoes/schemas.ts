/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_ANEXOS_NEGOCIACOES_TABLE_NAME = "t_anexos_negociacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const anexos_negociacoesBaseSchema = z.object({
	id: z.number(),
	extname: z.string(),
	f_anexos_fk: z.number(),
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
export const anexos_negociacoesRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	storage: z.number().nullable(),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const anexos_negociacoesSchema = anexos_negociacoesBaseSchema.extend(
	anexos_negociacoesRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const anexos_negociacoesCreateSchema = anexos_negociacoesSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	storage: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const anexos_negociacoesUpdateSchema =
	anexos_negociacoesCreateSchema.partial();
