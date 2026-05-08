/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";
import { info_asoBaseSchema } from "../info-aso/schemas";

export const T_ASOS_TABLE_NAME = "t_asos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const asosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_fk_infos_aso: z.number(),
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
export const asosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	f_info_aso: z.lazy(() => info_asoBaseSchema.nullable()),
	storage: z.number().nullable(),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const asosSchema = asosBaseSchema.extend(asosRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const asosCreateSchema = asosSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_funcionarios: true,
	f_info_aso: true,
	id: true,
	storage: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const asosUpdateSchema = asosCreateSchema.partial();
