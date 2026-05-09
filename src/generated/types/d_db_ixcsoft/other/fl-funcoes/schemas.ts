/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FL_FUNCOES_TABLE_NAME = "fl_funcoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fl_funcoesBaseSchema = z.object({
	id: z.number(),
	coef_salario: z.number(),
	funcao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fl_funcoesSchema = fl_funcoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fl_funcoesCreateSchema = fl_funcoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fl_funcoesUpdateSchema = fl_funcoesCreateSchema.partial();
