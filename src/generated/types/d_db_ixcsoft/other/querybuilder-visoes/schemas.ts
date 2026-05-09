/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { querybuilder_visoesSubquerySchema } from "./labels";

export const QUERYBUILDER_VISOES_TABLE_NAME = "querybuilder_visoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const querybuilder_visoesBaseSchema = z.object({
	id: z.number(),
	atualizacao_data: z.string(),
	autor: z.number(),
	cache_ttl: z.number(),
	descricao: z.string(),
	filter_date: z.string(),
	form_pivot: z.string(),
	groups: z.string(),
	json: z.string(),
	nome: z.string(),
	subquery: querybuilder_visoesSubquerySchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const querybuilder_visoesSchema = querybuilder_visoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const querybuilder_visoesCreateSchema = querybuilder_visoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const querybuilder_visoesUpdateSchema =
	querybuilder_visoesCreateSchema.partial();
