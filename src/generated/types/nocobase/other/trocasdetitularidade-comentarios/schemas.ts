/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_TROCASDETITULARIDADE_COMENTARIOS_TABLE_NAME =
	"t_trocasdetitularidade_comentarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const trocasdetitularidade_comentariosBaseSchema = z.object({
	id: z.number(),
	f_comentario: z.string(),
	f_comentario_troca_de_titularidade: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const trocasdetitularidade_comentariosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const trocasdetitularidade_comentariosSchema =
	trocasdetitularidade_comentariosBaseSchema.extend(
		trocasdetitularidade_comentariosRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const trocasdetitularidade_comentariosCreateSchema =
	trocasdetitularidade_comentariosSchema.omit({
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
export const trocasdetitularidade_comentariosUpdateSchema =
	trocasdetitularidade_comentariosCreateSchema.partial();
