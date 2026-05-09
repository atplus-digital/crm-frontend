/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ALT_PLANO_ACRESCIMO_TABLE_NAME = "alt_plano_acrescimo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alt_plano_acrescimoBaseSchema = z.object({
	id: z.number(),
	data_validade: z.string(),
	descricao: z.string(),
	id_alt_plano: z.number(),
	percentual: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alt_plano_acrescimoSchema = alt_plano_acrescimoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alt_plano_acrescimoCreateSchema = alt_plano_acrescimoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alt_plano_acrescimoUpdateSchema =
	alt_plano_acrescimoCreateSchema.partial();
