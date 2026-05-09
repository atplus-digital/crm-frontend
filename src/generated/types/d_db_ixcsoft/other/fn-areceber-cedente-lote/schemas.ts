/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_areceber_cedente_loteStatusSchema,
	fn_areceber_cedente_loteTipoRetornoSchema,
} from "./labels";

export const FN_ARECEBER_CEDENTE_LOTE_TABLE_NAME = "fn_areceber_cedente_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_cedente_loteBaseSchema = z.object({
	id: z.number(),
	arquivo_retorno: z.string(),
	id_carteira_cobranca: z.number(),
	id_modelo_retorno_bancario: z.number(),
	media_segundos_titulo: z.number(),
	momento_fin_processo: z.string(),
	momento_ini_processo: z.string(),
	status: fn_areceber_cedente_loteStatusSchema,
	tipo_retorno: fn_areceber_cedente_loteTipoRetornoSchema,
	total_divergencias_valor: z.number(),
	total_erros_processamento: z.number(),
	total_registros_lidos: z.number(),
	total_titulos_processados: z.number(),
	total_valor_baixado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_cedente_loteSchema =
	fn_areceber_cedente_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_cedente_loteCreateSchema =
	fn_areceber_cedente_loteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_cedente_loteUpdateSchema =
	fn_areceber_cedente_loteCreateSchema.partial();
