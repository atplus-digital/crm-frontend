/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_TELECOM_ANEXOS_TABLE_NAME = "t_telecom_anexos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_anexosBaseSchema = z.object({
	id: z.number(),
	extname: z.string(),
	f_6j2u7ptvn88: z.number(),
	f_88kxg6s8bb8: z.number(),
	f_wo3wzgdoyoa: z.number(),
	f_ycsq6mkkvk7: z.number(),
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
export const telecom_anexosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	storage: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_anexosSchema = telecom_anexosBaseSchema.merge(
	telecom_anexosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_anexosCreateSchema = telecom_anexosSchema.omit({
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
export const telecom_anexosUpdateSchema = telecom_anexosCreateSchema.partial();
