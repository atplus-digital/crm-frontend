/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AGE_NEGOCIACOES_SAIDAS_TABLE_NAME = "age_negociacoes_saidas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const age_negociacoes_saidasBaseSchema = z.object({
	id: z.number(),
	id_negociacao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const age_negociacoes_saidasSchema = age_negociacoes_saidasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const age_negociacoes_saidasCreateSchema =
	age_negociacoes_saidasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const age_negociacoes_saidasUpdateSchema =
	age_negociacoes_saidasCreateSchema.partial();
