/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_extratoConciliadoSchema } from "./labels";

export const FN_EXTRATO_TABLE_NAME = "fn_extrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_extratoBaseSchema = z.object({
	id: z.number(),
	conciliado: fn_extratoConciliadoSchema,
	conciliado_extrato: z.string(),
	conciliado_financeiro: z.string(),
	credito: z.number(),
	data: z.string(),
	debito: z.number(),
	documento: z.string(),
	historico: z.string(),
	id_conciliacao_lote: z.number(),
	id_conta: z.number(),
	id_extrato: z.string(),
	ids_financeiro: z.string(),
	info1: z.string(),
	info2: z.string(),
	pix_txid: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_extratoSchema = fn_extratoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_extratoCreateSchema = fn_extratoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_extratoUpdateSchema = fn_extratoCreateSchema.partial();
