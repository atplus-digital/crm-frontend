/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	df_fusao_tipoCriacaoAutomaticaSchema,
	df_fusao_tipoStatusSchema,
} from "./labels";

export const DF_FUSAO_TIPO_TABLE_NAME = "df_fusao_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_fusao_tipoBaseSchema = z.object({
	id: z.number(),
	cor: z.string(),
	criacao_automatica: df_fusao_tipoCriacaoAutomaticaSchema,
	descricao: z.string(),
	nome: z.string(),
	perda: z.number(),
	status: df_fusao_tipoStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_fusao_tipoSchema = df_fusao_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_fusao_tipoCreateSchema = df_fusao_tipoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_fusao_tipoUpdateSchema = df_fusao_tipoCreateSchema.partial();
