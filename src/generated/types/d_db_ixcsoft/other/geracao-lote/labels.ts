/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOLOTE_FIELD_LABELS = {
	base_geracao_por_tipo_doc: "base_geracao_por_tipo_doc",
	buscar_produtos_por: "buscar_produtos_por",
	comunicacao_unica: "comunicacao_unica",
	condicao_pagamento: "condicao_pagamento",
	consultar_separadamente: "consultar_separadamente",
	data_emissao_nf: "data_emissao_nf",
	data_emissao_nf_voip: "data_emissao_nf_voip",
	data_final_ligacoes_voip: "data_final_ligacoes_voip",
	data_final_venciemnto_voip: "data_final_venciemnto_voip",
	data_geracao: "data_geracao",
	data_inicial_ligacoes_voip: "data_inicial_ligacoes_voip",
	data_inicial_venciemnto_voip: "data_inicial_venciemnto_voip",
	data_lancamento_voip: "data_lancamento_voip",
	data_limite_inicio_contrato_nf: "data_limite_inicio_contrato_nf",
	data_limite_rec_anteriores: "data_limite_rec_anteriores",
	desc_filtro_lote: "desc_filtro_lote",
	filial_id: "filial_id",
	forma_recebimento_financeiro: "forma_recebimento_financeiro",
	gerar_nf_boleto_rec_parcial: "gerar_nf_boleto_rec_parcial",
	gerar_nf_cli_bloqueado: "gerar_nf_cli_bloqueado",
	gerar_nf_contrato_canc: "gerar_nf_contrato_canc",
	gerar_nf_pre_contrato: "gerar_nf_pre_contrato",
	gerar_nf_prop_avulso: "gerar_nf_prop_avulso",
	gerar_nf_recebidos_anteriores: "gerar_nf_recebidos_anteriores",
	gerar_nf_voip: "gerar_nf_voip",
	id: "id",
	id_base_geracao_nf: "id_base_geracao_nf",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_condicao_pagamento_voip: "id_condicao_pagamento_voip",
	id_contrato_final_nf: "id_contrato_final_nf",
	id_contrato_inicial_nf: "id_contrato_inicial_nf",
	id_tipo_cliente: "id_tipo_cliente",
	id_vd_contrato: "id_vd_contrato",
	media_segundos_nota: "media_segundos_nota",
	mes_ano_referencia_nf: "mes_ano_referencia_nf",
	modelo_nf: "modelo_nf",
	modelo_nf_geracao: "modelo_nf_geracao",
	momento_fin_geracao: "momento_fin_geracao",
	momento_ini_geracao: "momento_ini_geracao",
	motivo_cancelamento_lote: "motivo_cancelamento_lote",
	numero_lote_cancelar: "numero_lote_cancelar",
	ramal_voip: "ramal_voip",
	recebimento_final_financeiro: "recebimento_final_financeiro",
	recebimento_inicial_financeiro: "recebimento_inicial_financeiro",
	status_geracao_nf: "status_geracao_nf",
	status_nf_financeiro: "status_nf_financeiro",
	tipo_cliente_scm: "tipo_cliente_scm",
	tipo_documento_opcional_nf: "tipo_documento_opcional_nf",
	tipo_geracao_lote: "tipo_geracao_lote",
	tipo_pessoa_nf: "tipo_pessoa_nf",
	total_erros_ultima_geracao: "total_erros_ultima_geracao",
	total_notas_geradas: "total_notas_geradas",
	total_valor_gerado: "total_valor_gerado",
	vencimento_final_financeiro: "vencimento_final_financeiro",
	vencimento_inicial_financeiro: "vencimento_inicial_financeiro",
	vencimento_pos_pago_voip: "vencimento_pos_pago_voip",
} as const;

export const GERACAOLOTE_BASEGERACAOPORTIPODOC_LABELS = {
	OPC: "OPC",
	PROD: "PROD",
	P: "P",
} as const;

export const GERACAOLOTE_COMUNICACAOUNICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_CONSULTARSEPARADAMENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_DATAGERACAO_LABELS = {
	V: "V",
	R: "R",
} as const;

export const GERACAOLOTE_GERARNFBOLETORECPARCIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFCONTRATOCANC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFPRECONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFPROPAVULSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFRECEBIDOSANTERIORES_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_TIPOCLIENTESCM_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
	99: "99",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_loteBaseGeracaoPorTipoDocSchema = z.enum(
	["OPC", "PROD", "P"],
	{
		error: () => ({
			message: "base_geracao_por_tipo_doc: valores válidos são [OPC, PROD, P]",
		}),
	},
);

export const geracao_loteComunicacaoUnicaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "comunicacao_unica: valores válidos são [S, N]" }),
});

export const geracao_loteConsultarSeparadamenteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "consultar_separadamente: valores válidos são [S, N]",
	}),
});

export const geracao_loteDataGeracaoSchema = z.enum(["V", "R"], {
	error: () => ({ message: "data_geracao: valores válidos são [V, R]" }),
});

export const geracao_loteGerarNfBoletoRecParcialSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_boleto_rec_parcial: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfContratoCancSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_contrato_canc: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfPreContratoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_pre_contrato: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfPropAvulsoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_prop_avulso: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfRecebidosAnterioresSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_recebidos_anteriores: valores válidos são [S, N]",
	}),
});

export const geracao_loteTipoClienteScmSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07", "08", "99"],
	{
		error: () => ({
			message:
				"tipo_cliente_scm: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08, 99]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoLoteBaseGeracaoPorTipoDoc = z.infer<
	typeof geracao_loteBaseGeracaoPorTipoDocSchema
>;

export type GeracaoLoteComunicacaoUnica = z.infer<
	typeof geracao_loteComunicacaoUnicaSchema
>;

export type GeracaoLoteConsultarSeparadamente = z.infer<
	typeof geracao_loteConsultarSeparadamenteSchema
>;

export type GeracaoLoteDataGeracao = z.infer<
	typeof geracao_loteDataGeracaoSchema
>;

export type GeracaoLoteGerarNfBoletoRecParcial = z.infer<
	typeof geracao_loteGerarNfBoletoRecParcialSchema
>;

export type GeracaoLoteGerarNfContratoCanc = z.infer<
	typeof geracao_loteGerarNfContratoCancSchema
>;

export type GeracaoLoteGerarNfPreContrato = z.infer<
	typeof geracao_loteGerarNfPreContratoSchema
>;

export type GeracaoLoteGerarNfPropAvulso = z.infer<
	typeof geracao_loteGerarNfPropAvulsoSchema
>;

export type GeracaoLoteGerarNfRecebidosAnteriores = z.infer<
	typeof geracao_loteGerarNfRecebidosAnterioresSchema
>;

export type GeracaoLoteTipoClienteScm = z.infer<
	typeof geracao_loteTipoClienteScmSchema
>;
