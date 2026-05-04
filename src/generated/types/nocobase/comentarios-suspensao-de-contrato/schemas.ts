/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_COMENTARIOS_SUSPENSAO_DE_CONTRATO_TABLE_NAME =
	"t_comentarios_suspensao_de_contrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const comentarios_suspensao_de_contratoBaseSchema = z.object({
	id: z.number(),
	f_fk_suspensao: z.number(),
	f_comentario: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const comentarios_suspensao_de_contratoRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const comentarios_suspensao_de_contratoSchema =
	comentarios_suspensao_de_contratoBaseSchema.merge(
		comentarios_suspensao_de_contratoRelationSchema,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const comentarios_suspensao_de_contratoCreateSchema =
	comentarios_suspensao_de_contratoSchema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const comentarios_suspensao_de_contratoUpdateSchema =
	comentarios_suspensao_de_contratoCreateSchema.partial();
