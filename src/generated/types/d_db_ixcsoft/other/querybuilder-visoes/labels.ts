/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const QUERYBUILDERVISOES_FIELD_LABELS = {
	atualizacao_data: "atualizacao_data",
	autor: "autor",
	cache_ttl: "cache_ttl",
	descricao: "descricao",
	filter_date: "filter_date",
	form_pivot: "form_pivot",
	groups: "groups",
	id: "id",
	json: "json",
	nome: "nome",
	subquery: "subquery",
} as const;

export const QUERYBUILDERVISOES_SUBQUERY_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const querybuilder_visoesSubquerySchema = z.enum(["S", "N"], {
	error: () => ({ message: "subquery: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type QuerybuilderVisoesSubquery = z.infer<
	typeof querybuilder_visoesSubquerySchema
>;
