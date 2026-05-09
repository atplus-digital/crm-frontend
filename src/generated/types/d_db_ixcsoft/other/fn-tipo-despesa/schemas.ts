/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_TIPO_DESPESA_TABLE_NAME = "fn_tipo_despesa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_tipo_despesaBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	observacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_tipo_despesaSchema = fn_tipo_despesaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_tipo_despesaCreateSchema = fn_tipo_despesaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_tipo_despesaUpdateSchema =
	fn_tipo_despesaCreateSchema.partial();
