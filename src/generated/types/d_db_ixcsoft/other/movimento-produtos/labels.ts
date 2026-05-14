/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MOVIMENTOPRODUTOS_FIELD_LABELS = {
	aliquota_cbs_efetiva: "aliquota_cbs_efetiva",
	aliquota_fcp: "aliquota_fcp",
	aliquota_fcp_st: "aliquota_fcp_st",
	aliquota_ibs_efetiva: "aliquota_ibs_efetiva",
	aliquota_ibs_efetiva_munic: "aliquota_ibs_efetiva_munic",
	bfcp: "bfcp",
	bfcp_st: "bfcp_st",
	bicms: "bicms",
	bicms_st: "bicms_st",
	bipi: "bipi",
	cbs_aliquota: "cbs_aliquota",
	cbs_ibs_base_calculo: "cbs_ibs_base_calculo",
	cbs_valor: "cbs_valor",
	cfop: "cfop",
	cod_benef: "cod_benef",
	cod_classificacao_servico: "cod_classificacao_servico",
	cod_classificacao_tribut_cbs_ibs: "cod_classificacao_tribut_cbs_ibs",
	cod_situacao_tribut_cbs_ibs: "cod_situacao_tribut_cbs_ibs",
	codigo_especie: "codigo_especie",
	codigo_fornecedor: "codigo_fornecedor",
	cofins_retido_aliquota: "cofins_retido_aliquota",
	cofins_retido_valor: "cofins_retido_valor",
	cofins_situacao_tributaria: "cofins_situacao_tributaria",
	csll_aliquota: "csll_aliquota",
	csll_valor: "csll_valor",
	cst: "cst",
	custo: "custo",
	data: "data",
	data_cotacao_diaria: "data_cotacao_diaria",
	descartado: "descartado",
	descricao: "descricao",
	descricao_fornecedor: "descricao_fornecedor",
	di_adicao: "di_adicao",
	di_cod_fabricante: "di_cod_fabricante",
	di_seqadicao: "di_seqadicao",
	difal_pfcupfdest: "difal_pfcupfdest",
	difal_picmsinter: "difal_picmsinter",
	difal_picmsinterpart: "difal_picmsinterpart",
	difal_picmsufdest: "difal_picmsufdest",
	difal_vbcufdest: "difal_vbcufdest",
	difal_vfcpufdest: "difal_vfcpufdest",
	difal_vicmsufdest: "difal_vicmsufdest",
	difal_vicmsufremet: "difal_vicmsufremet",
	estoque: "estoque",
	ex_tipi: "ex_tipi",
	fator_conversao: "fator_conversao",
	faturado_pedido_os: "faturado_pedido_os",
	filial_id: "filial_id",
	forma_tributacao: "forma_tributacao",
	garantia_ate: "garantia_ate",
	garantia_oss: "garantia_oss",
	gera_3020: "gera_3020",
	historico: "historico",
	ibs_estadual_aliquota: "ibs_estadual_aliquota",
	ibs_estadual_valor: "ibs_estadual_valor",
	ibs_municipal_aliquota: "ibs_municipal_aliquota",
	ibs_municipal_valor: "ibs_municipal_valor",
	icms_modBC: "icms_modBC",
	icms_modBCst: "icms_modBCst",
	icms_pMVAST: "icms_pMVAST",
	icms_predbc: "icms_predbc",
	icms_predbcst: "icms_predbcst",
	icms_regime: "icms_regime",
	icms_sn_origem: "icms_sn_origem",
	icms_sn_stributaria: "icms_sn_stributaria",
	id: "id",
	id_acabamento: "id_acabamento",
	id_ajuste_estoque: "id_ajuste_estoque",
	id_almox: "id_almox",
	id_assinatura_cliente_produto: "id_assinatura_cliente_produto",
	id_baixa_lote: "id_baixa_lote",
	id_class_fiscal: "id_class_fiscal",
	id_classificacao_tributaria: "id_classificacao_tributaria",
	id_cliente_contrato_servicos: "id_cliente_contrato_servicos",
	id_contrato: "id_contrato",
	id_contrato_servicos: "id_contrato_servicos",
	id_devolucao: "id_devolucao",
	id_entrada: "id_entrada",
	id_equipamento_tv: "id_equipamento_tv",
	id_estrutura: "id_estrutura",
	id_inventario: "id_inventario",
	id_itens_pedido: "id_itens_pedido",
	id_login: "id_login",
	id_lote: "id_lote",
	id_moeda: "id_moeda",
	id_negociacao: "id_negociacao",
	id_oss_chamado: "id_oss_chamado",
	id_oss_mensagem: "id_oss_mensagem",
	id_patrimonio: "id_patrimonio",
	id_pedido_compra: "id_pedido_compra",
	id_pedido_compra_itens: "id_pedido_compra_itens",
	id_pedido_os: "id_pedido_os",
	id_produto: "id_produto",
	id_requisacao_material_item: "id_requisacao_material_item",
	id_saida: "id_saida",
	id_su_oss_kit_equipamento: "id_su_oss_kit_equipamento",
	id_terceiro_oss: "id_terceiro_oss",
	id_tipo_documento: "id_tipo_documento",
	id_transf_almox: "id_transf_almox",
	id_transf_almox_item: "id_transf_almox_item",
	id_unidade: "id_unidade",
	id_usuario_descarte: "id_usuario_descarte",
	id_vd_contratos_produtos: "id_vd_contratos_produtos",
	imobilizado: "imobilizado",
	importando_dfe: "importando_dfe",
	inss_aliquota: "inss_aliquota",
	inss_valor: "inss_valor",
	irrf_aliquota: "irrf_aliquota",
	irrf_valor: "irrf_valor",
	iss_aliquota: "iss_aliquota",
	iss_aliquota_retido: "iss_aliquota_retido",
	iss_lista_servico: "iss_lista_servico",
	iss_municipio_ocorencia: "iss_municipio_ocorencia",
	iss_tributacao: "iss_tributacao",
	iss_uf: "iss_uf",
	iss_valor: "iss_valor",
	iss_valor_base_calculo: "iss_valor_base_calculo",
	iss_valor_retido: "iss_valor_retido",
	item_nf_anterior: "item_nf_anterior",
	iva_situation: "iva_situation",
	mac: "mac",
	moeda_simbolo: "moeda_simbolo",
	motivo_descarte: "motivo_descarte",
	movimento_cancelamento_venda: "movimento_cancelamento_venda",
	mp_cofins_alq: "mp_cofins_alq",
	mp_cofins_bc: "mp_cofins_bc",
	mp_cofins_valor: "mp_cofins_valor",
	mp_ii_alq: "mp_ii_alq",
	mp_ii_bc: "mp_ii_bc",
	mp_ii_desp_aduaneira: "mp_ii_desp_aduaneira",
	mp_ii_iof: "mp_ii_iof",
	mp_ii_valor: "mp_ii_valor",
	mp_ipi_classe_enguadramento: "mp_ipi_classe_enguadramento",
	mp_ipi_cnpj_produtor: "mp_ipi_cnpj_produtor",
	mp_ipi_codigo_enquadramento: "mp_ipi_codigo_enquadramento",
	mp_ipi_codigo_selo_controle: "mp_ipi_codigo_selo_controle",
	mp_ipi_sit_tributaria: "mp_ipi_sit_tributaria",
	mp_ipi_tipo_calculo: "mp_ipi_tipo_calculo",
	mp_iva_alq: "mp_iva_alq",
	mp_iva_bc: "mp_iva_bc",
	mp_iva_valor: "mp_iva_valor",
	mp_pis_alq: "mp_pis_alq",
	mp_pis_bc: "mp_pis_bc",
	mp_pis_valor: "mp_pis_valor",
	mp_reteica_aliquota: "mp_reteica_aliquota",
	mp_reteica_valor: "mp_reteica_valor",
	mp_reteiva_valor: "mp_reteiva_valor",
	ncm: "ncm",
	nfci: "nfci",
	numero_patrimonial: "numero_patrimonial",
	numero_serie: "numero_serie",
	old_itens_pedido: "old_itens_pedido",
	origem_movimento: "origem_movimento",
	p_funttel: "p_funttel",
	p_fust: "p_fust",
	pacrescimo: "pacrescimo",
	patrimonio: "patrimonio",
	pcomissao: "pcomissao",
	pdesconto: "pdesconto",
	pdesconto_finan: "pdesconto_finan",
	pedido_os_faturado: "pedido_os_faturado",
	pesob: "pesob",
	pesol: "pesol",
	pfcp_st: "pfcp_st",
	picms: "picms",
	picms_st: "picms_st",
	pipi: "pipi",
	pis_retido_aliquota: "pis_retido_aliquota",
	pis_retido_valor: "pis_retido_valor",
	pis_situacao_tributaria: "pis_situacao_tributaria",
	qtde_pedido: "qtde_pedido",
	qtde_saida: "qtde_saida",
	quantidade: "quantidade",
	reducao_aliquota: "reducao_aliquota",
	reducao_aliquota_governamental: "reducao_aliquota_governamental",
	retefuente_retido_aliquota: "retefuente_retido_aliquota",
	retefuente_retido_valor: "retefuente_retido_valor",
	reteiva_aliquota: "reteiva_aliquota",
	status: "status",
	status_comodato: "status_comodato",
	status_produto: "status_produto",
	tipo: "tipo",
	tipo_fiscal_plano: "tipo_fiscal_plano",
	tipo_preenchimento_tributacao: "tipo_preenchimento_tributacao",
	tipo_produto: "tipo_produto",
	tipo_transferencia: "tipo_transferencia",
	tipo_tributacao: "tipo_tributacao",
	tributacao_digitada: "tributacao_digitada",
	ultima_atualizacao: "ultima_atualizacao",
	ultima_situacao_patrimonio: "ultima_situacao_patrimonio",
	unidade_sigla: "unidade_sigla",
	v_funttel: "v_funttel",
	v_fust: "v_fust",
	vacrescimo: "vacrescimo",
	valor_cotacao_diaria: "valor_cotacao_diaria",
	valor_fcp: "valor_fcp",
	valor_fcp_st: "valor_fcp_st",
	valor_frete: "valor_frete",
	valor_ibs: "valor_ibs",
	valor_icm: "valor_icm",
	valor_icms_st: "valor_icms_st",
	valor_ipi: "valor_ipi",
	valor_isentas_icms: "valor_isentas_icms",
	valor_moeda_original: "valor_moeda_original",
	valor_outras_icms: "valor_outras_icms",
	valor_outros: "valor_outros",
	valor_total: "valor_total",
	valor_unitario: "valor_unitario",
	vdesconto: "vdesconto",
	vdesconto_finan: "vdesconto_finan",
	volumes: "volumes",
} as const;

export const MOVIMENTOPRODUTOS_DESCARTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_ESTOQUE_LABELS = {
	S: "S",
	N: "N",
	L: "L",
} as const;

export const MOVIMENTOPRODUTOS_FATURADOPEDIDOOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_GARANTIAOSS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_ICMSREGIME_LABELS = {
	1: "1",
	2: "2",
} as const;

export const MOVIMENTOPRODUTOS_IMOBILIZADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_IMPORTANDODFE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_MOVIMENTOCANCELAMENTOVENDA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_MPIPITIPOCALCULO_LABELS = {
	P: "P",
	V: "V",
} as const;

export const MOVIMENTOPRODUTOS_ORIGEMMOVIMENTO_LABELS = {
	S: "S",
	P: "P",
} as const;

export const MOVIMENTOPRODUTOS_PEDIDOOSFATURADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MOVIMENTOPRODUTOS_STATUS_LABELS = {
	N: "N",
	C: "C",
} as const;

export const MOVIMENTOPRODUTOS_STATUSCOMODATO_LABELS = {
	E: "E",
	D: "D",
	B: "B",
	A: "A",
} as const;

export const MOVIMENTOPRODUTOS_TIPO_LABELS = {
	E: "E",
	S: "S",
	I: "I",
} as const;

export const MOVIMENTOPRODUTOS_TIPOFISCALPLANO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	M: "M",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

export const MOVIMENTOPRODUTOS_TIPOPREENCHIMENTOTRIBUTACAO_LABELS = {
	CM: "CM",
	CA: "CA",
	CX: "CX",
} as const;

export const MOVIMENTOPRODUTOS_TIPOPRODUTO_LABELS = {
	C: "C",
	S: "S",
	F: "F",
	M: "M",
	P: "P",
	O: "O",
} as const;

export const MOVIMENTOPRODUTOS_TIPOTRANSFERENCIA_LABELS = {
	AOS: "AOS",
} as const;

export const MOVIMENTOPRODUTOS_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

export const MOVIMENTOPRODUTOS_TRIBUTACAODIGITADA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const movimento_produtosDescartadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "descartado: valores válidos são [S, N]" }),
});

export const movimento_produtosEstoqueSchema = z.enum(["S", "N", "L"], {
	error: () => ({ message: "estoque: valores válidos são [S, N, L]" }),
});

export const movimento_produtosFaturadoPedidoOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "faturado_pedido_os: valores válidos são [S, N]" }),
});

export const movimento_produtosGarantiaOssSchema = z.enum(["S", "N"], {
	error: () => ({ message: "garantia_oss: valores válidos são [S, N]" }),
});

export const movimento_produtosIcmsRegimeSchema = z.enum(["1", "2"], {
	error: () => ({ message: "icms_regime: valores válidos são [1, 2]" }),
});

export const movimento_produtosImobilizadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imobilizado: valores válidos são [S, N]" }),
});

export const movimento_produtosImportandoDfeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "importando_dfe: valores válidos são [S, N]" }),
});

export const movimento_produtosMovimentoCancelamentoVendaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "movimento_cancelamento_venda: valores válidos são [S, N]",
		}),
	},
);

export const movimento_produtosMpIpiTipoCalculoSchema = z.enum(["P", "V"], {
	error: () => ({ message: "mp_ipi_tipo_calculo: valores válidos são [P, V]" }),
});

export const movimento_produtosOrigemMovimentoSchema = z.enum(["S", "P"], {
	error: () => ({ message: "origem_movimento: valores válidos são [S, P]" }),
});

export const movimento_produtosPedidoOsFaturadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pedido_os_faturado: valores válidos são [S, N]" }),
});

export const movimento_produtosStatusSchema = z.enum(["N", "C"], {
	error: () => ({ message: "status: valores válidos são [N, C]" }),
});

export const movimento_produtosStatusComodatoSchema = z.enum(
	["E", "D", "B", "A"],
	{
		error: () => ({
			message: "status_comodato: valores válidos são [E, D, B, A]",
		}),
	},
);

export const movimento_produtosTipoSchema = z.enum(["E", "S", "I"], {
	error: () => ({ message: "tipo: valores válidos são [E, S, I]" }),
});

export const movimento_produtosTipoFiscalPlanoSchema = z.enum(
	["I", "T", "S", "M", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message:
				"tipo_fiscal_plano: valores válidos são [I, T, S, M, SVA, TV, SMP]",
		}),
	},
);

export const movimento_produtosTipoPreenchimentoTributacaoSchema = z.enum(
	["CM", "CA", "CX"],
	{
		error: () => ({
			message:
				"tipo_preenchimento_tributacao: valores válidos são [CM, CA, CX]",
		}),
	},
);

export const movimento_produtosTipoProdutoSchema = z.enum(
	["C", "S", "F", "M", "P", "O"],
	{
		error: () => ({
			message: "tipo_produto: valores válidos são [C, S, F, M, P, O]",
		}),
	},
);

export const movimento_produtosTipoTransferenciaSchema = z.enum(["AOS"], {
	error: () => ({ message: "tipo_transferencia: valores válidos são [AOS]" }),
});

export const movimento_produtosTipoTributacaoSchema = z.enum(
	["ICMS", "ISSQN"],
	{
		error: () => ({
			message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
		}),
	},
);

export const movimento_produtosTributacaoDigitadaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tributacao_digitada: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MovimentoProdutosDescartado = z.infer<
	typeof movimento_produtosDescartadoSchema
>;

export type MovimentoProdutosEstoque = z.infer<
	typeof movimento_produtosEstoqueSchema
>;

export type MovimentoProdutosFaturadoPedidoOs = z.infer<
	typeof movimento_produtosFaturadoPedidoOsSchema
>;

export type MovimentoProdutosGarantiaOss = z.infer<
	typeof movimento_produtosGarantiaOssSchema
>;

export type MovimentoProdutosIcmsRegime = z.infer<
	typeof movimento_produtosIcmsRegimeSchema
>;

export type MovimentoProdutosImobilizado = z.infer<
	typeof movimento_produtosImobilizadoSchema
>;

export type MovimentoProdutosImportandoDfe = z.infer<
	typeof movimento_produtosImportandoDfeSchema
>;

export type MovimentoProdutosMovimentoCancelamentoVenda = z.infer<
	typeof movimento_produtosMovimentoCancelamentoVendaSchema
>;

export type MovimentoProdutosMpIpiTipoCalculo = z.infer<
	typeof movimento_produtosMpIpiTipoCalculoSchema
>;

export type MovimentoProdutosOrigemMovimento = z.infer<
	typeof movimento_produtosOrigemMovimentoSchema
>;

export type MovimentoProdutosPedidoOsFaturado = z.infer<
	typeof movimento_produtosPedidoOsFaturadoSchema
>;

export type MovimentoProdutosStatus = z.infer<
	typeof movimento_produtosStatusSchema
>;

export type MovimentoProdutosStatusComodato = z.infer<
	typeof movimento_produtosStatusComodatoSchema
>;

export type MovimentoProdutosTipo = z.infer<
	typeof movimento_produtosTipoSchema
>;

export type MovimentoProdutosTipoFiscalPlano = z.infer<
	typeof movimento_produtosTipoFiscalPlanoSchema
>;

export type MovimentoProdutosTipoPreenchimentoTributacao = z.infer<
	typeof movimento_produtosTipoPreenchimentoTributacaoSchema
>;

export type MovimentoProdutosTipoProduto = z.infer<
	typeof movimento_produtosTipoProdutoSchema
>;

export type MovimentoProdutosTipoTransferencia = z.infer<
	typeof movimento_produtosTipoTransferenciaSchema
>;

export type MovimentoProdutosTipoTributacao = z.infer<
	typeof movimento_produtosTipoTributacaoSchema
>;

export type MovimentoProdutosTributacaoDigitada = z.infer<
	typeof movimento_produtosTributacaoDigitadaSchema
>;
