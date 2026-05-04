/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { opcoes_stfc_templatePortabilidadeSchema } from "./labels";

export const T_OPCOES_STFC_TEMPLATE_TABLE_NAME = "t_opcoes_stfc_template";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const opcoes_stfc_templateBaseSchema = z.object({
	id: z.number(),
	f_fk_opcoes_stfc_template: z.number(),
	f_canais: z.number(),
	f_franquia: z.string(),
	f_nome_do_plano: z.string(),
	f_portabilidade: opcoes_stfc_templatePortabilidadeSchema,
	f_terminais: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const opcoes_stfc_templateRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const opcoes_stfc_templateSchema = opcoes_stfc_templateBaseSchema.merge(
	opcoes_stfc_templateRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const opcoes_stfc_templateCreateSchema = opcoes_stfc_templateSchema.omit(
	{
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const opcoes_stfc_templateUpdateSchema =
	opcoes_stfc_templateCreateSchema.partial();
