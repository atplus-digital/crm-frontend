/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AGE_NEGOCIACOES_TABLE_NAME = "age_negociacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const age_negociacoesBaseSchema = z.object({
	id: z.number(),
	apagar: z.number(),
	data: z.string(),
	descricao: z.string(),
	teste: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const age_negociacoesSchema = age_negociacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const age_negociacoesCreateSchema = age_negociacoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const age_negociacoesUpdateSchema =
	age_negociacoesCreateSchema.partial();
