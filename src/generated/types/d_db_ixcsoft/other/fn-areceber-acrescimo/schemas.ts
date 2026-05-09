/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_ACRESCIMO_TABLE_NAME = "fn_areceber_acrescimo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_acrescimoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	descricao: z.string(),
	id_receber: z.number(),
	percentual: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_acrescimoSchema = fn_areceber_acrescimoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_acrescimoCreateSchema =
	fn_areceber_acrescimoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_acrescimoUpdateSchema =
	fn_areceber_acrescimoCreateSchema.partial();
