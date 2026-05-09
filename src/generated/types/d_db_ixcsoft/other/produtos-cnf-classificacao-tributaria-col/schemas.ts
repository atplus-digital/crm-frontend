/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_CNF_CLASSIFICACAO_TRIBUTARIA_COL_TABLE_NAME =
	"produtos_cnf_classificacao_tributaria_col";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_cnf_classificacao_tributaria_colBaseSchema = z.object({
	id: z.number(),
	id_classificacao_tributaria: z.number(),
	id_produto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_cnf_classificacao_tributaria_colSchema =
	produtos_cnf_classificacao_tributaria_colBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_cnf_classificacao_tributaria_colCreateSchema =
	produtos_cnf_classificacao_tributaria_colSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_cnf_classificacao_tributaria_colUpdateSchema =
	produtos_cnf_classificacao_tributaria_colCreateSchema.partial();
