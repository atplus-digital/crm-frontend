/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FATURA_FN_ARECEBER_TABLE_NAME = "fatura_fn_areceber";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fatura_fn_areceberBaseSchema = z.object({
	id: z.number(),
	data_criacao: z.string(),
	id_fatura: z.number(),
	id_fn_areceber: z.number(),
	id_saida: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fatura_fn_areceberSchema = fatura_fn_areceberBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fatura_fn_areceberCreateSchema = fatura_fn_areceberSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fatura_fn_areceberUpdateSchema =
	fatura_fn_areceberCreateSchema.partial();
