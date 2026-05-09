/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	df_conexoesPosicaoElemento2Schema,
	df_conexoesPosicaoInElemento2Schema,
	df_conexoesPosicaoOutElemento2Schema,
} from "./labels";

export const DF_CONEXOES_TABLE_NAME = "df_conexoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_conexoesBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_coord_elemento_1: z.number(),
	id_coord_elemento_2: z.number(),
	id_elemento_1: z.number(),
	id_elemento_2: z.number(),
	posicao_elemento_2: df_conexoesPosicaoElemento2Schema,
	posicao_in_elemento_2: df_conexoesPosicaoInElemento2Schema,
	posicao_out_elemento_2: df_conexoesPosicaoOutElemento2Schema,
	sequencia_elemento_2: z.number(),
	sequencia_in_elemento_2: z.number(),
	sequencia_out_elemento_2: z.number(),
	tabela_elemento_1: z.string(),
	tabela_elemento_2: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_conexoesSchema = df_conexoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_conexoesCreateSchema = df_conexoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_conexoesUpdateSchema = df_conexoesCreateSchema.partial();
