/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_areceber_hist_boletoEnviadoEmailMassaPeriodoSchema } from "./labels";

export const FN_ARECEBER_HIST_BOLETO_TABLE_NAME = "fn_areceber_hist_boleto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_hist_boletoBaseSchema = z.object({
	id: z.number(),
	bf_bankAccount: z.string(),
	bf_ourNumber: z.string(),
	carteira: z.string(),
	cod_barras: z.string(),
	codigo_banco: z.string(),
	data_emissao: z.string(),
	data_impressao: z.string(),
	data_vencimento: z.string(),
	data_vencimento_atual: z.string(),
	enviado_email_massa_periodo:
		fn_areceber_hist_boletoEnviadoEmailMassaPeriodoSchema,
	especie_documento: z.string(),
	gateway: z.string(),
	historico_envio: z.string(),
	historico_retorno: z.string(),
	id_areceber: z.number(),
	linha_digitavel: z.string(),
	nosso_numero: z.string(),
	num_cobranca: z.string(),
	numero_documento: z.string(),
	pix_qr_code: z.string(),
	pix_qr_code_image: z.string(),
	status: z.string(),
	usuario: z.string(),
	vlr_atual: z.number(),
	vlr_original: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_hist_boletoSchema = fn_areceber_hist_boletoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_hist_boletoCreateSchema =
	fn_areceber_hist_boletoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_hist_boletoUpdateSchema =
	fn_areceber_hist_boletoCreateSchema.partial();
