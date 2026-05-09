/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_apagar_retorno_loteStatusSchema } from "./labels";

export const FN_APAGAR_RETORNO_LOTE_TABLE_NAME = "fn_apagar_retorno_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_retorno_loteBaseSchema = z.object({
	id: z.number(),
	arquivo_retorno: z.string(),
	data_hora_processamento: z.string(),
	id_contas: z.number(),
	media_segundos_titulo: z.number(),
	momento_fin_processo: z.string(),
	momento_ini_processo: z.string(),
	status: fn_apagar_retorno_loteStatusSchema,
	total_erros_processamento: z.number(),
	total_registros_lidos: z.number(),
	total_titulos: z.number(),
	total_valor_baixado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_retorno_loteSchema = fn_apagar_retorno_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_retorno_loteCreateSchema =
	fn_apagar_retorno_loteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_retorno_loteUpdateSchema =
	fn_apagar_retorno_loteCreateSchema.partial();
