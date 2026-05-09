/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_chequeCompensadoSchema } from "./labels";

export const FN_CHEQUE_TABLE_NAME = "fn_cheque";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_chequeBaseSchema = z.object({
	id: z.number(),
	banco: z.string(),
	compensado: fn_chequeCompensadoSchema,
	data: z.string(),
	id_apagar: z.number(),
	id_caixa: z.number(),
	id_cliente: z.number(),
	id_liquidacao: z.number(),
	id_recebimento: z.number(),
	nome: z.string(),
	numero: z.string(),
	predatado: z.string(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_chequeSchema = fn_chequeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_chequeCreateSchema = fn_chequeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_chequeUpdateSchema = fn_chequeCreateSchema.partial();
