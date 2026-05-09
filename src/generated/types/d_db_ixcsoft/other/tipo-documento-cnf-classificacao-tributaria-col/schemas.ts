/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TIPO_DOCUMENTO_CNF_CLASSIFICACAO_TRIBUTARIA_COL_TABLE_NAME =
	"tipo_documento_cnf_classificacao_tributaria_col";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tipo_documento_cnf_classificacao_tributaria_colBaseSchema =
	z.object({
		id: z.number(),
		id_classificacao_tributaria: z.number(),
		id_tipo_documento: z.number(),
	});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tipo_documento_cnf_classificacao_tributaria_colSchema =
	tipo_documento_cnf_classificacao_tributaria_colBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tipo_documento_cnf_classificacao_tributaria_colCreateSchema =
	tipo_documento_cnf_classificacao_tributaria_colSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tipo_documento_cnf_classificacao_tributaria_colUpdateSchema =
	tipo_documento_cnf_classificacao_tributaria_colCreateSchema.partial();
