/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERCEDENTE_FIELD_LABELS = {
	abatimentos: "abatimentos",
	acrescimos: "acrescimos",
	agencia_codigo: "agencia_codigo",
	ass_gerencianet: "ass_gerencianet",
	cod_mov: "cod_mov",
	codigo_autorizacao: "codigo_autorizacao",
	conta_numero: "conta_numero",
	data_credito: "data_credito",
	data_hora: "data_hora",
	data_ocorrencia: "data_ocorrencia",
	data_vencimento: "data_vencimento",
	file_md5: "file_md5",
	fn_areceber_assinatura: "fn_areceber_assinatura",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cliente: "id_cliente",
	id_cobranca: "id_cobranca",
	id_lote_retorno: "id_lote_retorno",
	id_movim_finan: "id_movim_finan",
	iof: "iof",
	local_pagamento: "local_pagamento",
	motivo: "motivo",
	nosso_numero: "nosso_numero",
	obs: "obs",
	status: "status",
	tarifa: "tarifa",
	temp: "temp",
	tipo_carteira: "tipo_carteira",
	valor: "valor",
	valor_atualizado: "valor_atualizado",
	valor_liquido: "valor_liquido",
	valor_original: "valor_original",
	valor_pago: "valor_pago",
} as const;

export const FNARECEBERCEDENTE_STATUS_LABELS = {
	I: "I",
	N: "N",
	R: "R",
	NE: "NE",
	VI: "VI",
	JR: "JR",
	JC: "JC",
	JP: "JP",
	1: "1",
	2: "2",
	E: "E",
	JRC: "JRC",
	REJ: "REJ",
	TP: "TP",
	TPS: "TPS",
	BX: "BX",
	OT: "OT",
	UV: "UV",
	DV: "DV",
	MG: "MG",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_cedenteStatusSchema = z.enum(
	[
		"I",
		"N",
		"R",
		"NE",
		"VI",
		"JR",
		"JC",
		"JP",
		"1",
		"2",
		"E",
		"JRC",
		"REJ",
		"TP",
		"TPS",
		"BX",
		"OT",
		"UV",
		"DV",
		"MG",
	],
	{
		error: () => ({
			message:
				"status: valores válidos são [I, N, R, NE, VI, JR, JC, JP, 1, 2, E, JRC, REJ, TP, TPS, BX, OT, UV, DV, MG]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberCedenteStatus = z.infer<
	typeof fn_areceber_cedenteStatusSchema
>;
