/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_CONTRATOS_TABLE_NAME = "t_contratos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contratosBaseSchema = z.object({
	id: z.number(),
	f_fk_negociacao_contrato: z.number(),
	f_fk_suspensao: z.number(),
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
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const contratosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	storage: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contratosSchema = contratosBaseSchema.merge(
	contratosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contratosCreateSchema = contratosSchema.omit({
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
export const contratosUpdateSchema = contratosCreateSchema.partial();
