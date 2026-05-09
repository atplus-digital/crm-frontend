/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_conciliacao_lote_logStatusSchema } from "./labels";

export const FN_CONCILIACAO_LOTE_LOG_TABLE_NAME = "fn_conciliacao_lote_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_conciliacao_lote_logBaseSchema = z.object({
	id: z.number(),
	conciliado_extrato: z.string(),
	conciliado_financeiro: z.string(),
	data_hora: z.string(),
	id_apagar: z.number(),
	id_areceber: z.number(),
	id_conciliacao_lote: z.number(),
	id_operador: z.number(),
	mensagem: z.string(),
	status: fn_conciliacao_lote_logStatusSchema,
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_conciliacao_lote_logSchema = fn_conciliacao_lote_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_conciliacao_lote_logCreateSchema =
	fn_conciliacao_lote_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_conciliacao_lote_logUpdateSchema =
	fn_conciliacao_lote_logCreateSchema.partial();
