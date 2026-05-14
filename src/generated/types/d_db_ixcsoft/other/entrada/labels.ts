/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ENTRADA_FIELD_LABELS = {
	arquivo_xml: "arquivo_xml",
	caminho_xml_dir: "caminho_xml_dir",
	cofins_valor_retido: "cofins_valor_retido",
	condicoes_pagamento: "condicoes_pagamento",
	csll_valor_retido: "csll_valor_retido",
	data_emissao: "data_emissao",
	data_entrada: "data_entrada",
	di_exportador: "di_exportador",
	documento: "documento",
	entrada_reaberta: "entrada_reaberta",
	entrada_xml: "entrada_xml",
	fcp_bc: "fcp_bc",
	fcp_bc_st: "fcp_bc_st",
	fcp_valor_st: "fcp_valor_st",
	filial_id: "filial_id",
	finalidade_nfe: "finalidade_nfe",
	formulario: "formulario",
	frete_especie: "frete_especie",
	frete_peso_bruto: "frete_peso_bruto",
	frete_peso_liquido: "frete_peso_liquido",
	frete_volumes: "frete_volumes",
	gera_estoque: "gera_estoque",
	icms_bc: "icms_bc",
	icms_bc_st: "icms_bc_st",
	icms_valor: "icms_valor",
	icms_valor_insento: "icms_valor_insento",
	icms_valor_outros: "icms_valor_outros",
	icms_valor_st: "icms_valor_st",
	id: "id",
	id_cfop: "id_cfop",
	id_comodato: "id_comodato",
	id_fornecedor: "id_fornecedor",
	id_lote_nfe: "id_lote_nfe",
	import_di_cnpj: "import_di_cnpj",
	import_di_data: "import_di_data",
	import_di_data_desenbaraco: "import_di_data_desenbaraco",
	import_di_local_desenbaraco: "import_di_local_desenbaraco",
	import_di_n: "import_di_n",
	import_di_tp_intermedio: "import_di_tp_intermedio",
	import_di_tp_via_transp: "import_di_tp_via_transp",
	import_di_uf_desenbaraco: "import_di_uf_desenbaraco",
	import_di_uf_terceiro: "import_di_uf_terceiro",
	import_di_val_afrmm: "import_di_val_afrmm",
	inf_adicionais: "inf_adicionais",
	inf_corpo_nota: "inf_corpo_nota",
	inss_valor: "inss_valor",
	ipi_valor: "ipi_valor",
	irrf_valor: "irrf_valor",
	iss_bc: "iss_bc",
	iss_valor: "iss_valor",
	iss_valor_retido: "iss_valor_retido",
	iss_vserv: "iss_vserv",
	modelo_nf: "modelo_nf",
	mot_cancelamento: "mot_cancelamento",
	mot_carta_correcao: "mot_carta_correcao",
	nfe_chave: "nfe_chave",
	nfe_chave_ao_enviar: "nfe_chave_ao_enviar",
	nfe_emitida: "nfe_emitida",
	nfe_referenciada: "nfe_referenciada",
	nfe_status: "nfe_status",
	numero_nf: "numero_nf",
	operador: "operador",
	origem_mercadoria: "origem_mercadoria",
	outras_despesas_acessorias: "outras_despesas_acessorias",
	pacrescimo: "pacrescimo",
	pdesconto: "pdesconto",
	pis_valor_retido: "pis_valor_retido",
	realizar_rateio_outras_despesas: "realizar_rateio_outras_despesas",
	serie: "serie",
	status: "status",
	tipo_calculo_tributacao: "tipo_calculo_tributacao",
	tipo_documento: "tipo_documento",
	tipo_entrada_compra: "tipo_entrada_compra",
	tipo_frete: "tipo_frete",
	tipo_tributacao: "tipo_tributacao",
	tpemis_nfe: "tpemis_nfe",
	tpimp_nfe: "tpimp_nfe",
	transportadora: "transportadora",
	vacrescimo: "vacrescimo",
	valor_doc_fiscal: "valor_doc_fiscal",
	valor_fcp: "valor_fcp",
	valor_total: "valor_total",
	valor_total_doc_fiscal: "valor_total_doc_fiscal",
	valor_total_produtos: "valor_total_produtos",
	vcofins: "vcofins",
	vdesconto: "vdesconto",
	vfrete: "vfrete",
	vii: "vii",
	vii_desp_aduaneira: "vii_desp_aduaneira",
	vipi_frete: "vipi_frete",
	voutro: "voutro",
	vpis: "vpis",
	vseg: "vseg",
} as const;

export const ENTRADA_ENTRADAREABERTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ENTRADA_ENTRADAXML_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ENTRADA_FINALIDADENFE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
} as const;

export const ENTRADA_FORMULARIO_LABELS = {
	P: "P",
	C: "C",
	I: "I",
	T: "T",
} as const;

export const ENTRADA_NFEEMITIDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ENTRADA_ORIGEMMERCADORIA_LABELS = {
	0: "0",
	1: "1",
	2: "2",
} as const;

export const ENTRADA_REALIZARRATEIOOUTRASDESPESAS_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const ENTRADA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
	E: "E",
} as const;

export const ENTRADA_TIPOCALCULOTRIBUTACAO_LABELS = {
	XML: "XML",
	XMLA: "XMLA",
	SIST: "SIST",
	MAN: "MAN",
} as const;

export const ENTRADA_TIPOENTRADACOMPRA_LABELS = {
	XML: "XML",
	DFE: "DFE",
	MANUAL: "MANUAL",
} as const;

export const ENTRADA_TIPOFRETE_LABELS = {
	P: "P",
	A: "A",
	9: "9",
} as const;

export const ENTRADA_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

export const ENTRADA_TPIMPNFE_LABELS = {
	1: "1",
	2: "2",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const entradaEntradaReabertaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "entrada_reaberta: valores válidos são [S, N]" }),
});

export const entradaEntradaXmlSchema = z.enum(["S", "N"], {
	error: () => ({ message: "entrada_xml: valores válidos são [S, N]" }),
});

export const entradaFinalidadeNfeSchema = z.enum(["1", "2", "3", "4"], {
	error: () => ({
		message: "finalidade_nfe: valores válidos são [1, 2, 3, 4]",
	}),
});

export const entradaFormularioSchema = z.enum(["P", "C", "I", "T"], {
	error: () => ({ message: "formulario: valores válidos são [P, C, I, T]" }),
});

export const entradaNfeEmitidaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nfe_emitida: valores válidos são [S, N]" }),
});

export const entradaOrigemMercadoriaSchema = z.enum(["0", "1", "2"], {
	error: () => ({
		message: "origem_mercadoria: valores válidos são [0, 1, 2]",
	}),
});

export const entradaRealizarRateioOutrasDespesasSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "realizar_rateio_outras_despesas: valores válidos são [S, N, P]",
		}),
	},
);

export const entradaStatusSchema = z.enum(["A", "F", "C", "E"], {
	error: () => ({ message: "status: valores válidos são [A, F, C, E]" }),
});

export const entradaTipoCalculoTributacaoSchema = z.enum(
	["XML", "XMLA", "SIST", "MAN"],
	{
		error: () => ({
			message:
				"tipo_calculo_tributacao: valores válidos são [XML, XMLA, SIST, MAN]",
		}),
	},
);

export const entradaTipoEntradaCompraSchema = z.enum(["XML", "DFE", "MANUAL"], {
	error: () => ({
		message: "tipo_entrada_compra: valores válidos são [XML, DFE, MANUAL]",
	}),
});

export const entradaTipoFreteSchema = z.enum(["P", "A", "9"], {
	error: () => ({ message: "tipo_frete: valores válidos são [P, A, 9]" }),
});

export const entradaTipoTributacaoSchema = z.enum(["ICMS", "ISSQN"], {
	error: () => ({
		message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
	}),
});

export const entradaTpimpNfeSchema = z.enum(["1", "2"], {
	error: () => ({ message: "tpimp_nfe: valores válidos são [1, 2]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EntradaEntradaReaberta = z.infer<
	typeof entradaEntradaReabertaSchema
>;

export type EntradaEntradaXml = z.infer<typeof entradaEntradaXmlSchema>;

export type EntradaFinalidadeNfe = z.infer<typeof entradaFinalidadeNfeSchema>;

export type EntradaFormulario = z.infer<typeof entradaFormularioSchema>;

export type EntradaNfeEmitida = z.infer<typeof entradaNfeEmitidaSchema>;

export type EntradaOrigemMercadoria = z.infer<
	typeof entradaOrigemMercadoriaSchema
>;

export type EntradaRealizarRateioOutrasDespesas = z.infer<
	typeof entradaRealizarRateioOutrasDespesasSchema
>;

export type EntradaStatus = z.infer<typeof entradaStatusSchema>;

export type EntradaTipoCalculoTributacao = z.infer<
	typeof entradaTipoCalculoTributacaoSchema
>;

export type EntradaTipoEntradaCompra = z.infer<
	typeof entradaTipoEntradaCompraSchema
>;

export type EntradaTipoFrete = z.infer<typeof entradaTipoFreteSchema>;

export type EntradaTipoTributacao = z.infer<typeof entradaTipoTributacaoSchema>;

export type EntradaTpimpNfe = z.infer<typeof entradaTpimpNfeSchema>;
