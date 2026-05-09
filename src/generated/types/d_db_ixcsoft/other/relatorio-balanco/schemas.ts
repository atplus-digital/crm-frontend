/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { relatorio_balancoBalancoPatrimonialSchema } from "./labels";

export const RELATORIO_BALANCO_TABLE_NAME = "relatorio_balanco";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_balancoBaseSchema = z.object({
	id: z.number(),
	ano_base: z.string(),
	ano_final: z.string(),
	balanco_patrimonial: relatorio_balancoBalancoPatrimonialSchema,
	conta_contabil: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_ultima_impres: z.string(),
	id_filial: z.number(),
	impresso_por: z.number(),
	nome: z.string(),
	relatorio: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_balancoSchema = relatorio_balancoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_balancoCreateSchema = relatorio_balancoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_balancoUpdateSchema =
	relatorio_balancoCreateSchema.partial();
