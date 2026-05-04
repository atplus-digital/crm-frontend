/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { info_asoInformadoSchema, info_asoTipoExameSchema } from "./labels";

export const T_INFO_ASO_TABLE_NAME = "t_info_aso";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const info_asoBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_apto: z.boolean(),
	f_data_exame: z.string(),
	f_data_prox_exame: z.string(),
	f_dias_afastamento: z.string(),
	f_informado: info_asoInformadoSchema,
	f_obs: z.string(),
	f_tipo_exame: info_asoTipoExameSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const info_asoRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_aso: z.number().nullable(),
	f_funcionarios_2: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const info_asoSchema = info_asoBaseSchema.merge(info_asoRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const info_asoCreateSchema = info_asoSchema.omit({
	createdAt: true,
	createdBy: true,
	f_aso: true,
	f_funcionarios_2: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const info_asoUpdateSchema = info_asoCreateSchema.partial();
