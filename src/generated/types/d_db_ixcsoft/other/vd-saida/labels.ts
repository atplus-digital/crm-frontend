/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VDSAIDA_FIELD_LABELS = {
	ambiente_nf: "ambiente_nf",
	ano_mes_nota_subistituida: "ano_mes_nota_subistituida",
	aprova_desconto: "aprova_desconto",
	aprova_desconto_user: "aprova_desconto_user",
	avalista_1: "avalista_1",
	avalista_2: "avalista_2",
	caminho_pdf_nfse: "caminho_pdf_nfse",
	caminho_xml_dir: "caminho_xml_dir",
	cbs_bc: "cbs_bc",
	cbs_valor: "cbs_valor",
	chave_acesso_nfcom: "chave_acesso_nfcom",
	chave_acesso_nfcom_op: "chave_acesso_nfcom_op",
	cnpj_nota_substituida: "cnpj_nota_substituida",
	cod_clasf_sped_saida: "cod_clasf_sped_saida",
	cod_classificacao_servico: "cod_classificacao_servico",
	comissao_perc_recebimento: "comissao_perc_recebimento",
	consumidor_final_cpf: "consumidor_final_cpf",
	consumidor_final_razao: "consumidor_final_razao",
	data_cancelamento: "data_cancelamento",
	data_emissao: "data_emissao",
	data_emissao_pedido: "data_emissao_pedido",
	data_geracao_nf: "data_geracao_nf",
	data_saida: "data_saida",
	data_vencimento_areceber: "data_vencimento_areceber",
	difal_vFCPUFDest: "difal_vFCPUFDest",
	difal_vICMSUFDest: "difal_vICMSUFDest",
	difal_vICMSUFRemet: "difal_vICMSUFRemet",
	documento: "documento",
	eh_fatura: "eh_fatura",
	filial_id: "filial_id",
	finalidade_nfe: "finalidade_nfe",
	formulario: "formulario",
	gera_estoque: "gera_estoque",
	ibs_cb: "ibs_cb",
	ibs_estadual_valor: "ibs_estadual_valor",
	ibs_municipal_valor: "ibs_municipal_valor",
	icms_bc: "icms_bc",
	icms_bcst: "icms_bcst",
	icms_valor: "icms_valor",
	icms_valorst: "icms_valorst",
	id: "id",
	id_areceber: "id_areceber",
	id_assinatura_cliente: "id_assinatura_cliente",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cfop: "id_cfop",
	id_classificacao_tributaria: "id_classificacao_tributaria",
	id_cliente: "id_cliente",
	id_comissionado: "id_comissionado",
	id_comodato: "id_comodato",
	id_condicao_pagamento: "id_condicao_pagamento",
	id_contrato: "id_contrato",
	id_contrato_avulso: "id_contrato_avulso",
	id_filial_destino: "id_filial_destino",
	id_geracao_lote: "id_geracao_lote",
	id_geracao_lote_assinaturas: "id_geracao_lote_assinaturas",
	id_geracao_lote_financeiro_manual: "id_geracao_lote_financeiro_manual",
	id_im_imovel: "id_im_imovel",
	id_lote_geracao_fatura: "id_lote_geracao_fatura",
	id_lote_geracao_financeiro: "id_lote_geracao_financeiro",
	id_lote_nfe: "id_lote_nfe",
	id_mot_cancelamento: "id_mot_cancelamento",
	id_saida_agrupada: "id_saida_agrupada",
	id_tipo_documento: "id_tipo_documento",
	id_transf_almox_top: "id_transf_almox_top",
	id_transportadora: "id_transportadora",
	ids_areceber: "ids_areceber",
	ids_contratos_origem: "ids_contratos_origem",
	ids_faturas_origem: "ids_faturas_origem",
	impresso: "impresso",
	indFinal: "indFinal",
	indPres: "indPres",
	infAdFisco: "infAdFisco",
	infCpl: "infCpl",
	iss_bc: "iss_bc",
	iss_valor: "iss_valor",
	iss_valor_retido: "iss_valor_retido",
	mes_referencia: "mes_referencia",
	mod_nf_substituida: "mod_nf_substituida",
	modalidade_frete: "modalidade_frete",
	modelo_nf: "modelo_nf",
	modelo_nota_substituida: "modelo_nota_substituida",
	mot_cancelamento: "mot_cancelamento",
	mot_carta_correcao: "mot_carta_correcao",
	motivo_substituicao: "motivo_substituicao",
	natop_nf: "natop_nf",
	nf_gerada_ajuste: "nf_gerada_ajuste",
	nf_gerada_substituicao: "nf_gerada_substituicao",
	nfe_chave: "nfe_chave",
	nfe_chave_ao_enviar: "nfe_chave_ao_enviar",
	nfe_referenciada: "nfe_referenciada",
	nfe_referenciada_sigilo: "nfe_referenciada_sigilo",
	nfe_status: "nfe_status",
	nfse_codigo_verificacao: "nfse_codigo_verificacao",
	nfse_lote: "nfse_lote",
	nfse_prot: "nfse_prot",
	nfse_status: "nfse_status",
	nota_retroativa: "nota_retroativa",
	numeracao_lote_ixc: "numeracao_lote_ixc",
	numero_nf: "numero_nf",
	numero_nota_substituida: "numero_nota_substituida",
	obs: "obs",
	obsCont_xCampo: "obsCont_xCampo",
	obsCont_xTexto: "obsCont_xTexto",
	operador: "operador",
	origem: "origem",
	pacrescimo: "pacrescimo",
	pcomissao: "pcomissao",
	pdesconto: "pdesconto",
	pdesconto_finan: "pdesconto_finan",
	pdf_nf: "pdf_nf",
	placa: "placa",
	placa_rntc: "placa_rntc",
	placa_uf: "placa_uf",
	placas: "placas",
	previsao: "previsao",
	serie: "serie",
	serie_nf: "serie_nf",
	serie_nota_subistituida: "serie_nota_subistituida",
	status: "status",
	status_ajuste_nf: "status_ajuste_nf",
	status_ecommerce: "status_ecommerce",
	status_fat_os: "status_fat_os",
	status_substituicao_nf: "status_substituicao_nf",
	tipo_tributacao: "tipo_tributacao",
	tp_faturamento_nfcom: "tp_faturamento_nfcom",
	tp_nota_credito: "tp_nota_credito",
	tp_nota_debito: "tp_nota_debito",
	tpemis_nfe: "tpemis_nfe",
	tpimp_nfe: "tpimp_nfe",
	uf_saida_pais: "uf_saida_pais",
	ultima_atualizacao: "ultima_atualizacao",
	v_funttel: "v_funttel",
	v_fust: "v_fust",
	vacrescimo: "vacrescimo",
	valor_bc_irrf: "valor_bc_irrf",
	valor_cofins: "valor_cofins",
	valor_csll: "valor_csll",
	valor_desc: "valor_desc",
	valor_fcp: "valor_fcp",
	valor_fcp_st: "valor_fcp_st",
	valor_frete: "valor_frete",
	valor_ii: "valor_ii",
	valor_inss: "valor_inss",
	valor_ipi: "valor_ipi",
	valor_irrf: "valor_irrf",
	valor_isentas_icms: "valor_isentas_icms",
	valor_iva: "valor_iva",
	valor_outras_icms: "valor_outras_icms",
	valor_outros: "valor_outros",
	valor_parcelas: "valor_parcelas",
	valor_pis: "valor_pis",
	valor_produtos: "valor_produtos",
	valor_retido_bc_prev: "valor_retido_bc_prev",
	valor_retido_cofins: "valor_retido_cofins",
	valor_retido_csll: "valor_retido_csll",
	valor_retido_inss: "valor_retido_inss",
	valor_retido_irrf: "valor_retido_irrf",
	valor_retido_pis: "valor_retido_pis",
	valor_retido_prev: "valor_retido_prev",
	valor_retido_retefuente: "valor_retido_retefuente",
	valor_retido_reteica: "valor_retido_reteica",
	valor_retido_reteiva: "valor_retido_reteiva",
	valor_seg: "valor_seg",
	valor_total: "valor_total",
	vdesconto: "vdesconto",
	vdesconto_finan: "vdesconto_finan",
	veic_placa: "veic_placa",
	veic_rntc: "veic_rntc",
	veic_uf: "veic_uf",
	xloc_despacho: "xloc_despacho",
	xloc_exporta: "xloc_exporta",
	xml_nf: "xml_nf",
} as const;

export const VDSAIDA_AMBIENTENF_LABELS = {
	1: "1",
	2: "2",
} as const;

export const VDSAIDA_APROVADESCONTO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_EHFATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_FINALIDADENFE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	n62: "n62",
	s62: "s62",
	ad62: "ad62",
	5: "5",
	6: "6",
} as const;

export const VDSAIDA_FORMULARIO_LABELS = {
	P: "P",
	C: "C",
	I: "I",
	T: "T",
} as const;

export const VDSAIDA_GERAESTOQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_IMPRESSO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_MODNFSUBSTITUIDA_LABELS = {
	nf21: "nf21",
	nf22: "nf22",
	nfcom62: "nfcom62",
} as const;

export const VDSAIDA_MODELONOTASUBSTITUIDA_LABELS = {
	21: "21",
	22: "22",
} as const;

export const VDSAIDA_MOTIVOSUBSTITUICAO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
} as const;

export const VDSAIDA_NFEREFERENCIADASIGILO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_NOTARETROATIVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_ORIGEM_LABELS = {
	contrato_taxa_ativacao: "contrato_taxa_ativacao",
} as const;

export const VDSAIDA_PREVISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
	D: "D",
	AP: "AP",
	PE: "PE",
} as const;

export const VDSAIDA_STATUSAJUSTENF_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_STATUSSUBSTITUICAONF_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

export const VDSAIDA_TPNOTACREDITO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
} as const;

export const VDSAIDA_TPNOTADEBITO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
} as const;

export const VDSAIDA_TPIMPNFE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const vd_saidaAmbienteNfSchema = z.enum(["1", "2"], {
	error: () => ({ message: "ambiente_nf: valores válidos são [1, 2]" }),
});

export const vd_saidaAprovaDescontoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "aprova_desconto: valores válidos são [N, S]" }),
});

export const vd_saidaEhFaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "eh_fatura: valores válidos são [S, N]" }),
});

export const vd_saidaFinalidadeNfeSchema = z.enum(
	["1", "2", "3", "4", "n62", "s62", "ad62", "5", "6"],
	{
		error: () => ({
			message:
				"finalidade_nfe: valores válidos são [1, 2, 3, 4, n62, s62, ad62, 5, 6]",
		}),
	},
);

export const vd_saidaFormularioSchema = z.enum(["P", "C", "I", "T"], {
	error: () => ({ message: "formulario: valores válidos são [P, C, I, T]" }),
});

export const vd_saidaGeraEstoqueSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_estoque: valores válidos são [S, N]" }),
});

export const vd_saidaImpressoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "impresso: valores válidos são [N, S]" }),
});

export const vd_saidaModNfSubstituidaSchema = z.enum(
	["nf21", "nf22", "nfcom62"],
	{
		error: () => ({
			message: "mod_nf_substituida: valores válidos são [nf21, nf22, nfcom62]",
		}),
	},
);

export const vd_saidaModeloNotaSubstituidaSchema = z.enum(["21", "22"], {
	error: () => ({
		message: "modelo_nota_substituida: valores válidos são [21, 22]",
	}),
});

export const vd_saidaMotivoSubstituicaoSchema = z.enum(
	["01", "02", "03", "04", "05"],
	{
		error: () => ({
			message: "motivo_substituicao: valores válidos são [01, 02, 03, 04, 05]",
		}),
	},
);

export const vd_saidaNfeReferenciadaSigiloSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "nfe_referenciada_sigilo: valores válidos são [S, N]",
	}),
});

export const vd_saidaNotaRetroativaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nota_retroativa: valores válidos são [S, N]" }),
});

export const vd_saidaOrigemSchema = z.enum(["contrato_taxa_ativacao"], {
	error: () => ({
		message: "origem: valores válidos são [contrato_taxa_ativacao]",
	}),
});

export const vd_saidaPrevisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [S, N]" }),
});

export const vd_saidaStatusSchema = z.enum(["A", "F", "C", "D", "AP", "PE"], {
	error: () => ({
		message: "status: valores válidos são [A, F, C, D, AP, PE]",
	}),
});

export const vd_saidaStatusAjusteNfSchema = z.enum(["N", "S"], {
	error: () => ({ message: "status_ajuste_nf: valores válidos são [N, S]" }),
});

export const vd_saidaStatusSubstituicaoNfSchema = z.enum(["N", "S"], {
	error: () => ({
		message: "status_substituicao_nf: valores válidos são [N, S]",
	}),
});

export const vd_saidaTipoTributacaoSchema = z.enum(["ICMS", "ISSQN"], {
	error: () => ({
		message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
	}),
});

export const vd_saidaTpNotaCreditoSchema = z.enum(["01", "02", "03"], {
	error: () => ({
		message: "tp_nota_credito: valores válidos são [01, 02, 03]",
	}),
});

export const vd_saidaTpNotaDebitoSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07"],
	{
		error: () => ({
			message:
				"tp_nota_debito: valores válidos são [01, 02, 03, 04, 05, 06, 07]",
		}),
	},
);

export const vd_saidaTpimpNfeSchema = z.enum(["1", "2", "3", "4", "5"], {
	error: () => ({ message: "tpimp_nfe: valores válidos são [1, 2, 3, 4, 5]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VdSaidaAmbienteNf = z.infer<typeof vd_saidaAmbienteNfSchema>;

export type VdSaidaAprovaDesconto = z.infer<
	typeof vd_saidaAprovaDescontoSchema
>;

export type VdSaidaEhFatura = z.infer<typeof vd_saidaEhFaturaSchema>;

export type VdSaidaFinalidadeNfe = z.infer<typeof vd_saidaFinalidadeNfeSchema>;

export type VdSaidaFormulario = z.infer<typeof vd_saidaFormularioSchema>;

export type VdSaidaGeraEstoque = z.infer<typeof vd_saidaGeraEstoqueSchema>;

export type VdSaidaImpresso = z.infer<typeof vd_saidaImpressoSchema>;

export type VdSaidaModNfSubstituida = z.infer<
	typeof vd_saidaModNfSubstituidaSchema
>;

export type VdSaidaModeloNotaSubstituida = z.infer<
	typeof vd_saidaModeloNotaSubstituidaSchema
>;

export type VdSaidaMotivoSubstituicao = z.infer<
	typeof vd_saidaMotivoSubstituicaoSchema
>;

export type VdSaidaNfeReferenciadaSigilo = z.infer<
	typeof vd_saidaNfeReferenciadaSigiloSchema
>;

export type VdSaidaNotaRetroativa = z.infer<
	typeof vd_saidaNotaRetroativaSchema
>;

export type VdSaidaOrigem = z.infer<typeof vd_saidaOrigemSchema>;

export type VdSaidaPrevisao = z.infer<typeof vd_saidaPrevisaoSchema>;

export type VdSaidaStatus = z.infer<typeof vd_saidaStatusSchema>;

export type VdSaidaStatusAjusteNf = z.infer<
	typeof vd_saidaStatusAjusteNfSchema
>;

export type VdSaidaStatusSubstituicaoNf = z.infer<
	typeof vd_saidaStatusSubstituicaoNfSchema
>;

export type VdSaidaTipoTributacao = z.infer<
	typeof vd_saidaTipoTributacaoSchema
>;

export type VdSaidaTpNotaCredito = z.infer<typeof vd_saidaTpNotaCreditoSchema>;

export type VdSaidaTpNotaDebito = z.infer<typeof vd_saidaTpNotaDebitoSchema>;

export type VdSaidaTpimpNfe = z.infer<typeof vd_saidaTpimpNfeSchema>;
