/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DF_TIPO_ELEMENTO_REGIAO_PLANO_TABLE_NAME =
	"df_tipo_elemento_regiao_plano";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_tipo_elemento_regiao_planoBaseSchema = z.object({
	id: z.number(),
	id_df_regiao: z.number(),
	id_vd_contrato: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_tipo_elemento_regiao_planoSchema =
	df_tipo_elemento_regiao_planoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_tipo_elemento_regiao_planoCreateSchema =
	df_tipo_elemento_regiao_planoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_tipo_elemento_regiao_planoUpdateSchema =
	df_tipo_elemento_regiao_planoCreateSchema.partial();
