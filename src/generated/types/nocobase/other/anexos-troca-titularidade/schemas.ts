/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_ANEXOS_TROCA_TITULARIDADE_TABLE_NAME =
	"t_anexos_troca_titularidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const anexos_troca_titularidadeBaseSchema = z.object({
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
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const anexos_troca_titularidadeRelationSchema = z.object({
	createdBy: z.number().nullable(),
	storage: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const anexos_troca_titularidadeSchema =
	anexos_troca_titularidadeBaseSchema.merge(
		anexos_troca_titularidadeRelationSchema,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const anexos_troca_titularidadeCreateSchema =
	anexos_troca_titularidadeSchema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		storage: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const anexos_troca_titularidadeUpdateSchema =
	anexos_troca_titularidadeCreateSchema.partial();
