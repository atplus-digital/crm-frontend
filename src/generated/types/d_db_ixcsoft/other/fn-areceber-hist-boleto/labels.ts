/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERHISTBOLETO_FIELD_LABELS = {
	bf_bankAccount: "bf_bankAccount",
	bf_ourNumber: "bf_ourNumber",
	carteira: "carteira",
	cod_barras: "cod_barras",
	codigo_banco: "codigo_banco",
	data_emissao: "data_emissao",
	data_impressao: "data_impressao",
	data_vencimento: "data_vencimento",
	data_vencimento_atual: "data_vencimento_atual",
	enviado_email_massa_periodo: "enviado_email_massa_periodo",
	especie_documento: "especie_documento",
	gateway: "gateway",
	historico_envio: "historico_envio",
	historico_retorno: "historico_retorno",
	id: "id",
	id_areceber: "id_areceber",
	linha_digitavel: "linha_digitavel",
	nosso_numero: "nosso_numero",
	num_cobranca: "num_cobranca",
	numero_documento: "numero_documento",
	pix_qr_code: "pix_qr_code",
	pix_qr_code_image: "pix_qr_code_image",
	status: "status",
	usuario: "usuario",
	vlr_atual: "vlr_atual",
	vlr_original: "vlr_original",
} as const;

export const FNARECEBERHISTBOLETO_ENVIADOEMAILMASSAPERIODO_LABELS = {
	E: "E",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_hist_boletoEnviadoEmailMassaPeriodoSchema = z.enum(
	["E", "N"],
	{
		error: () => ({
			message: "enviado_email_massa_periodo: valores válidos são [E, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberHistBoletoEnviadoEmailMassaPeriodo = z.infer<
	typeof fn_areceber_hist_boletoEnviadoEmailMassaPeriodoSchema
>;
