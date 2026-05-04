/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_QUALIRUN_ASSINATURA_GOV_TABLE_NAME = "t_qualirun_assinatura_gov";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const qualirun_assinatura_govBaseSchema = z.object({
	id: z.number(),
	f_fk_negociacoes: z.number(),
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
export const qualirun_assinatura_govRelationSchema = z.object({
	createdBy: z.number().nullable(),
	storage: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const qualirun_assinatura_govSchema =
	qualirun_assinatura_govBaseSchema.merge(
		qualirun_assinatura_govRelationSchema,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const qualirun_assinatura_govCreateSchema =
	qualirun_assinatura_govSchema.omit({
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
export const qualirun_assinatura_govUpdateSchema =
	qualirun_assinatura_govCreateSchema.partial();
