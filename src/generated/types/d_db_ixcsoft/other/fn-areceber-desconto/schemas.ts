/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_DESCONTO_TABLE_NAME = "fn_areceber_desconto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_descontoBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	descricao: z.string(),
	id_funcionario: z.number(),
	id_receber: z.number(),
	percentual: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_descontoSchema = fn_areceber_descontoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_descontoCreateSchema = fn_areceber_descontoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_descontoUpdateSchema =
	fn_areceber_descontoCreateSchema.partial();
