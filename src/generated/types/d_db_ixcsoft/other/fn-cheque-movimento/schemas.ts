/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_CHEQUE_MOVIMENTO_TABLE_NAME = "fn_cheque_movimento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_cheque_movimentoBaseSchema = z.object({
	id: z.number(),
	caixa: z.number(),
	cliente: z.number(),
	data: z.string(),
	fornecedor: z.number(),
	id_cheque: z.number(),
	tipo_mov: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_cheque_movimentoSchema = fn_cheque_movimentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_cheque_movimentoCreateSchema = fn_cheque_movimentoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_cheque_movimentoUpdateSchema =
	fn_cheque_movimentoCreateSchema.partial();
