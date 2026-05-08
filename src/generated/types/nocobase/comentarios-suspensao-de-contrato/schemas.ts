/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../users/schemas";

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
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const comentarios_suspensao_de_contratoRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const comentarios_suspensao_de_contratoSchema =
	comentarios_suspensao_de_contratoBaseSchema.extend(
		comentarios_suspensao_de_contratoRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const comentarios_suspensao_de_contratoCreateSchema =
	comentarios_suspensao_de_contratoSchema.omit({
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
export const comentarios_suspensao_de_contratoUpdateSchema =
	comentarios_suspensao_de_contratoCreateSchema.partial();
