/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_apagar_retorno_lote_registrosStatusSchema } from "./labels";

export const FN_APAGAR_RETORNO_LOTE_REGISTROS_TABLE_NAME =
	"fn_apagar_retorno_lote_registros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_retorno_lote_registrosBaseSchema = z.object({
	id: z.number(),
	chave_md5_arquivo: z.string(),
	codigo_movimento: z.string(),
	data_debito: z.string(),
	data_ocorrencia: z.string(),
	data_vencimento: z.string(),
	id_apagar: z.number(),
	id_contas: z.number(),
	id_fn_apagar_retorno_lote: z.number(),
	id_movim_finan: z.number(),
	nosso_numero: z.string(),
	status: fn_apagar_retorno_lote_registrosStatusSchema,
	valor_original: z.number(),
	valor_pago: z.number(),
	valor_tarifa: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_retorno_lote_registrosSchema =
	fn_apagar_retorno_lote_registrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_retorno_lote_registrosCreateSchema =
	fn_apagar_retorno_lote_registrosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_retorno_lote_registrosUpdateSchema =
	fn_apagar_retorno_lote_registrosCreateSchema.partial();
