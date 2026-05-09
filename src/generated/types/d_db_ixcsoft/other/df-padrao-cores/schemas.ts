/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	df_padrao_coresCriacaoAutomaticaSchema,
	df_padrao_coresPadraoSistemaSchema,
} from "./labels";

export const DF_PADRAO_CORES_TABLE_NAME = "df_padrao_cores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_padrao_coresBaseSchema = z.object({
	id: z.number(),
	criacao_automatica: df_padrao_coresCriacaoAutomaticaSchema,
	nome: z.string(),
	padrao_sistema: df_padrao_coresPadraoSistemaSchema,
	sequencia_1: z.string(),
	sequencia_2: z.string(),
	total_sequencia_1: z.number(),
	total_sequencia_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_padrao_coresSchema = df_padrao_coresBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_padrao_coresCreateSchema = df_padrao_coresSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_padrao_coresUpdateSchema =
	df_padrao_coresCreateSchema.partial();
