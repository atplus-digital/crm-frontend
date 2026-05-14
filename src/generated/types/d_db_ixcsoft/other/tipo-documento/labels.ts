/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TIPODOCUMENTO_FIELD_LABELS = {
	ajusta_patrimonio: "ajusta_patrimonio",
	aliquota_cofins_tipo_doc: "aliquota_cofins_tipo_doc",
	aliquota_pis_tipo_doc: "aliquota_pis_tipo_doc",
	alterar_descricao_nf: "alterar_descricao_nf",
	atualiza_custo_medio: "atualiza_custo_medio",
	codigo: "codigo",
	codigo_classificacao_sped: "codigo_classificacao_sped",
	codigo_consumo_energia: "codigo_consumo_energia",
	controle_estoque: "controle_estoque",
	converter_tributacao_entrada_xml: "converter_tributacao_entrada_xml",
	cst_cofins_tipo_doc: "cst_cofins_tipo_doc",
	cst_pis_tipo_doc: "cst_pis_tipo_doc",
	desc_prod_arq_fiscais: "desc_prod_arq_fiscais",
	descricao_modelo_impressao: "descricao_modelo_impressao",
	descricao_produto_nf: "descricao_produto_nf",
	emite_nfe_entrada: "emite_nfe_entrada",
	exibir_tributos_csll_irrf: "exibir_tributos_csll_irrf",
	finalidade_nfe_tipo_doc: "finalidade_nfe_tipo_doc",
	financeiro_liberado: "financeiro_liberado",
	gera_contab: "gera_contab",
	gera_estoque: "gera_estoque",
	gera_fcem_sped: "gera_fcem_sped",
	gera_finan: "gera_finan",
	gera_fiscal: "gera_fiscal",
	gera_internet: "gera_internet",
	gera_mercadoria: "gera_mercadoria",
	gera_servicos: "gera_servicos",
	gera_servicos_nf: "gera_servicos_nf",
	gera_smp: "gera_smp",
	gera_sva: "gera_sva",
	gera_telefonia: "gera_telefonia",
	gera_tv: "gera_tv",
	gerar_fatura: "gerar_fatura",
	gerar_produtos_valor_zerado: "gerar_produtos_valor_zerado",
	grupo_tensao_energia: "grupo_tensao_energia",
	id: "id",
	id_almox_padrao: "id_almox_padrao",
	id_classificacao_tributaria_col: "id_classificacao_tributaria_col",
	id_cnf_grade_ctb: "id_cnf_grade_ctb",
	id_cnf_grade_ctb_cancelamento: "id_cnf_grade_ctb_cancelamento",
	id_filial: "id_filial",
	impostometro: "impostometro",
	indPres: "indPres",
	ir_desconta_cofins_retido_total: "ir_desconta_cofins_retido_total",
	ir_desconta_csll_retido_total: "ir_desconta_csll_retido_total",
	ir_desconta_inss_retido_total: "ir_desconta_inss_retido_total",
	ir_desconta_irrf_retido_total: "ir_desconta_irrf_retido_total",
	ir_desconta_iss_retido_total: "ir_desconta_iss_retido_total",
	ir_desconta_pis_retido_total: "ir_desconta_pis_retido_total",
	isento_iva_col: "isento_iva_col",
	mask_entrada_quantidade: "mask_entrada_quantidade",
	mask_entrada_valor_unit: "mask_entrada_valor_unit",
	mask_saida_quantidade: "mask_saida_quantidade",
	mask_saida_valor_unit: "mask_saida_valor_unit",
	modelo_impressao_nota: "modelo_impressao_nota",
	modelo_impressao_nota_col: "modelo_impressao_nota_col",
	modelo_nf: "modelo_nf",
	nat_bc_cred: "nat_bc_cred",
	natureza_dentro_estado: "natureza_dentro_estado",
	natureza_fora_estado: "natureza_fora_estado",
	natureza_operacao: "natureza_operacao",
	nf_complementar_comodato_entrada: "nf_complementar_comodato_entrada",
	nf_complementar_comodato_saida: "nf_complementar_comodato_saida",
	nf_complementar_tp_doc: "nf_complementar_tp_doc",
	nf_importacao: "nf_importacao",
	numero_automatico_fatura_siigo_col: "numero_automatico_fatura_siigo_col",
	regime_contabilizacao: "regime_contabilizacao",
	regime_tributario: "regime_tributario",
	serie_nf: "serie_nf",
	soma_frete_base_calc: "soma_frete_base_calc",
	soma_frete_base_calc_pis_cofins: "soma_frete_base_calc_pis_cofins",
	soma_voutros_base_calc: "soma_voutros_base_calc",
	soma_voutros_base_calc_pis_cofins: "soma_voutros_base_calc_pis_cofins",
	tipo: "tipo",
	tipo_documento: "tipo_documento",
	tipo_ligacao_energia: "tipo_ligacao_energia",
	tipo_rateio_frete: "tipo_rateio_frete",
	tipo_receita_sped: "tipo_receita_sped",
	tipo_transacao: "tipo_transacao",
	tipo_tributacao: "tipo_tributacao",
	tp_nota_credito: "tp_nota_credito",
	tp_nota_debito: "tp_nota_debito",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const TIPODOCUMENTO_AJUSTAPATRIMONIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_ALTERARDESCRICAONF_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_ATUALIZACUSTOMEDIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_CONTROLEESTOQUE_LABELS = {
	N: "N",
	B: "B",
	A: "A",
	L: "L",
	P: "P",
} as const;

export const TIPODOCUMENTO_CONVERTERTRIBUTACAOENTRADAXML_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_DESCPRODARQFISCAIS_LABELS = {
	M: "M",
	C: "C",
} as const;

export const TIPODOCUMENTO_DESCRICAOPRODUTONF_LABELS = {
	C: "C",
	M: "M",
} as const;

export const TIPODOCUMENTO_EMITENFEENTRADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_EXIBIRTRIBUTOSCSLLIRRF_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_FINALIDADENFETIPODOC_LABELS = {
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

export const TIPODOCUMENTO_FINANCEIROLIBERADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERACONTAB_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERAESTOQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERAFCEMSPED_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERAFINAN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERAFISCAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERAINTERNET_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERAMERCADORIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERASERVICOS_LABELS = {
	N: "N",
	S: "S",
} as const;

export const TIPODOCUMENTO_GERASERVICOSNF_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERASMP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERASVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERATELEFONIA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERATV_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERARFATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_GERARPRODUTOSVALORZERADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_IMPOSTOMETRO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_IRDESCONTACOFINSRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_IRDESCONTACSLLRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_IRDESCONTAINSSRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_IRDESCONTAIRRFRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_IRDESCONTAISSRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_IRDESCONTAPISRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_ISENTOIVACOL_LABELS = {
	S: "S",
	N: "N",
	E: "E",
} as const;

export const TIPODOCUMENTO_NFIMPORTACAO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const TIPODOCUMENTO_NUMEROAUTOMATICOFATURASIIGOCOL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_REGIMECONTABILIZACAO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const TIPODOCUMENTO_REGIMETRIBUTARIO_LABELS = {
	0: "0",
	1: "1",
	2: "2",
	3: "3",
} as const;

export const TIPODOCUMENTO_SOMAFRETEBASECALC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_SOMAFRETEBASECALCPISCOFINS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_SOMAVOUTROSBASECALC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_SOMAVOUTROSBASECALCPISCOFINS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TIPODOCUMENTO_TIPO_LABELS = {
	E: "E",
	S: "S",
} as const;

export const TIPODOCUMENTO_TIPORATEIOFRETE_LABELS = {
	P: "P",
	V: "V",
	Q: "Q",
} as const;

export const TIPODOCUMENTO_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
	NT: "NT",
} as const;

export const TIPODOCUMENTO_TPNOTACREDITO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
} as const;

export const TIPODOCUMENTO_TPNOTADEBITO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tipo_documentoAjustaPatrimonioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ajusta_patrimonio: valores válidos são [S, N]" }),
});

export const tipo_documentoAlterarDescricaoNfSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "alterar_descricao_nf: valores válidos são [S, N]",
	}),
});

export const tipo_documentoAtualizaCustoMedioSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "atualiza_custo_medio: valores válidos são [S, N]",
	}),
});

export const tipo_documentoControleEstoqueSchema = z.enum(
	["N", "B", "A", "L", "P"],
	{
		error: () => ({
			message: "controle_estoque: valores válidos são [N, B, A, L, P]",
		}),
	},
);

export const tipo_documentoConverterTributacaoEntradaXmlSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "converter_tributacao_entrada_xml: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoDescProdArqFiscaisSchema = z.enum(["M", "C"], {
	error: () => ({
		message: "desc_prod_arq_fiscais: valores válidos são [M, C]",
	}),
});

export const tipo_documentoDescricaoProdutoNfSchema = z.enum(["C", "M"], {
	error: () => ({
		message: "descricao_produto_nf: valores válidos são [C, M]",
	}),
});

export const tipo_documentoEmiteNfeEntradaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "emite_nfe_entrada: valores válidos são [S, N]" }),
});

export const tipo_documentoExibirTributosCsllIrrfSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "exibir_tributos_csll_irrf: valores válidos são [S, N]",
	}),
});

export const tipo_documentoFinalidadeNfeTipoDocSchema = z.enum(
	["1", "2", "3", "4", "n62", "s62", "ad62", "5", "6"],
	{
		error: () => ({
			message:
				"finalidade_nfe_tipo_doc: valores válidos são [1, 2, 3, 4, n62, s62, ad62, 5, 6]",
		}),
	},
);

export const tipo_documentoFinanceiroLiberadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "financeiro_liberado: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraContabSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_contab: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraEstoqueSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_estoque: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraFcemSpedSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_fcem_sped: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraFinanSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_finan: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraFiscalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_fiscal: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraInternetSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_internet: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraMercadoriaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_mercadoria: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraServicosSchema = z.enum(["N", "S"], {
	error: () => ({ message: "gera_servicos: valores válidos são [N, S]" }),
});

export const tipo_documentoGeraServicosNfSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_servicos_nf: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraSmpSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_smp: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraSvaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_sva: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraTelefoniaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_telefonia: valores válidos são [S, N]" }),
});

export const tipo_documentoGeraTvSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_tv: valores válidos são [S, N]" }),
});

export const tipo_documentoGerarFaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gerar_fatura: valores válidos são [S, N]" }),
});

export const tipo_documentoGerarProdutosValorZeradoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_produtos_valor_zerado: valores válidos são [S, N]",
	}),
});

export const tipo_documentoImpostometroSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impostometro: valores válidos são [S, N]" }),
});

export const tipo_documentoIrDescontaCofinsRetidoTotalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "ir_desconta_cofins_retido_total: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoIrDescontaCsllRetidoTotalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "ir_desconta_csll_retido_total: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoIrDescontaInssRetidoTotalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "ir_desconta_inss_retido_total: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoIrDescontaIrrfRetidoTotalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "ir_desconta_irrf_retido_total: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoIrDescontaIssRetidoTotalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ir_desconta_iss_retido_total: valores válidos são [S, N]",
	}),
});

export const tipo_documentoIrDescontaPisRetidoTotalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "ir_desconta_pis_retido_total: valores válidos são [S, N]",
	}),
});

export const tipo_documentoIsentoIvaColSchema = z.enum(["S", "N", "E"], {
	error: () => ({ message: "isento_iva_col: valores válidos são [S, N, E]" }),
});

export const tipo_documentoNfImportacaoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "nf_importacao: valores válidos são [N, S]" }),
});

export const tipo_documentoNumeroAutomaticoFaturaSiigoColSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "numero_automatico_fatura_siigo_col: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoRegimeContabilizacaoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "regime_contabilizacao: valores válidos são [S, N, P]",
		}),
	},
);

export const tipo_documentoRegimeTributarioSchema = z.enum(
	["0", "1", "2", "3"],
	{
		error: () => ({
			message: "regime_tributario: valores válidos são [0, 1, 2, 3]",
		}),
	},
);

export const tipo_documentoSomaFreteBaseCalcSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "soma_frete_base_calc: valores válidos são [S, N]",
	}),
});

export const tipo_documentoSomaFreteBaseCalcPisCofinsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "soma_frete_base_calc_pis_cofins: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoSomaVoutrosBaseCalcSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "soma_voutros_base_calc: valores válidos são [S, N]",
	}),
});

export const tipo_documentoSomaVoutrosBaseCalcPisCofinsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "soma_voutros_base_calc_pis_cofins: valores válidos são [S, N]",
		}),
	},
);

export const tipo_documentoTipoSchema = z.enum(["E", "S"], {
	error: () => ({ message: "tipo: valores válidos são [E, S]" }),
});

export const tipo_documentoTipoRateioFreteSchema = z.enum(["P", "V", "Q"], {
	error: () => ({
		message: "tipo_rateio_frete: valores válidos são [P, V, Q]",
	}),
});

export const tipo_documentoTipoTributacaoSchema = z.enum(
	["ICMS", "ISSQN", "NT"],
	{
		error: () => ({
			message: "tipo_tributacao: valores válidos são [ICMS, ISSQN, NT]",
		}),
	},
);

export const tipo_documentoTpNotaCreditoSchema = z.enum(
	["01", "02", "03", "04", "05"],
	{
		error: () => ({
			message: "tp_nota_credito: valores válidos são [01, 02, 03, 04, 05]",
		}),
	},
);

export const tipo_documentoTpNotaDebitoSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07", "08"],
	{
		error: () => ({
			message:
				"tp_nota_debito: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TipoDocumentoAjustaPatrimonio = z.infer<
	typeof tipo_documentoAjustaPatrimonioSchema
>;

export type TipoDocumentoAlterarDescricaoNf = z.infer<
	typeof tipo_documentoAlterarDescricaoNfSchema
>;

export type TipoDocumentoAtualizaCustoMedio = z.infer<
	typeof tipo_documentoAtualizaCustoMedioSchema
>;

export type TipoDocumentoControleEstoque = z.infer<
	typeof tipo_documentoControleEstoqueSchema
>;

export type TipoDocumentoConverterTributacaoEntradaXml = z.infer<
	typeof tipo_documentoConverterTributacaoEntradaXmlSchema
>;

export type TipoDocumentoDescProdArqFiscais = z.infer<
	typeof tipo_documentoDescProdArqFiscaisSchema
>;

export type TipoDocumentoDescricaoProdutoNf = z.infer<
	typeof tipo_documentoDescricaoProdutoNfSchema
>;

export type TipoDocumentoEmiteNfeEntrada = z.infer<
	typeof tipo_documentoEmiteNfeEntradaSchema
>;

export type TipoDocumentoExibirTributosCsllIrrf = z.infer<
	typeof tipo_documentoExibirTributosCsllIrrfSchema
>;

export type TipoDocumentoFinalidadeNfeTipoDoc = z.infer<
	typeof tipo_documentoFinalidadeNfeTipoDocSchema
>;

export type TipoDocumentoFinanceiroLiberado = z.infer<
	typeof tipo_documentoFinanceiroLiberadoSchema
>;

export type TipoDocumentoGeraContab = z.infer<
	typeof tipo_documentoGeraContabSchema
>;

export type TipoDocumentoGeraEstoque = z.infer<
	typeof tipo_documentoGeraEstoqueSchema
>;

export type TipoDocumentoGeraFcemSped = z.infer<
	typeof tipo_documentoGeraFcemSpedSchema
>;

export type TipoDocumentoGeraFinan = z.infer<
	typeof tipo_documentoGeraFinanSchema
>;

export type TipoDocumentoGeraFiscal = z.infer<
	typeof tipo_documentoGeraFiscalSchema
>;

export type TipoDocumentoGeraInternet = z.infer<
	typeof tipo_documentoGeraInternetSchema
>;

export type TipoDocumentoGeraMercadoria = z.infer<
	typeof tipo_documentoGeraMercadoriaSchema
>;

export type TipoDocumentoGeraServicos = z.infer<
	typeof tipo_documentoGeraServicosSchema
>;

export type TipoDocumentoGeraServicosNf = z.infer<
	typeof tipo_documentoGeraServicosNfSchema
>;

export type TipoDocumentoGeraSmp = z.infer<typeof tipo_documentoGeraSmpSchema>;

export type TipoDocumentoGeraSva = z.infer<typeof tipo_documentoGeraSvaSchema>;

export type TipoDocumentoGeraTelefonia = z.infer<
	typeof tipo_documentoGeraTelefoniaSchema
>;

export type TipoDocumentoGeraTv = z.infer<typeof tipo_documentoGeraTvSchema>;

export type TipoDocumentoGerarFatura = z.infer<
	typeof tipo_documentoGerarFaturaSchema
>;

export type TipoDocumentoGerarProdutosValorZerado = z.infer<
	typeof tipo_documentoGerarProdutosValorZeradoSchema
>;

export type TipoDocumentoImpostometro = z.infer<
	typeof tipo_documentoImpostometroSchema
>;

export type TipoDocumentoIrDescontaCofinsRetidoTotal = z.infer<
	typeof tipo_documentoIrDescontaCofinsRetidoTotalSchema
>;

export type TipoDocumentoIrDescontaCsllRetidoTotal = z.infer<
	typeof tipo_documentoIrDescontaCsllRetidoTotalSchema
>;

export type TipoDocumentoIrDescontaInssRetidoTotal = z.infer<
	typeof tipo_documentoIrDescontaInssRetidoTotalSchema
>;

export type TipoDocumentoIrDescontaIrrfRetidoTotal = z.infer<
	typeof tipo_documentoIrDescontaIrrfRetidoTotalSchema
>;

export type TipoDocumentoIrDescontaIssRetidoTotal = z.infer<
	typeof tipo_documentoIrDescontaIssRetidoTotalSchema
>;

export type TipoDocumentoIrDescontaPisRetidoTotal = z.infer<
	typeof tipo_documentoIrDescontaPisRetidoTotalSchema
>;

export type TipoDocumentoIsentoIvaCol = z.infer<
	typeof tipo_documentoIsentoIvaColSchema
>;

export type TipoDocumentoNfImportacao = z.infer<
	typeof tipo_documentoNfImportacaoSchema
>;

export type TipoDocumentoNumeroAutomaticoFaturaSiigoCol = z.infer<
	typeof tipo_documentoNumeroAutomaticoFaturaSiigoColSchema
>;

export type TipoDocumentoRegimeContabilizacao = z.infer<
	typeof tipo_documentoRegimeContabilizacaoSchema
>;

export type TipoDocumentoRegimeTributario = z.infer<
	typeof tipo_documentoRegimeTributarioSchema
>;

export type TipoDocumentoSomaFreteBaseCalc = z.infer<
	typeof tipo_documentoSomaFreteBaseCalcSchema
>;

export type TipoDocumentoSomaFreteBaseCalcPisCofins = z.infer<
	typeof tipo_documentoSomaFreteBaseCalcPisCofinsSchema
>;

export type TipoDocumentoSomaVoutrosBaseCalc = z.infer<
	typeof tipo_documentoSomaVoutrosBaseCalcSchema
>;

export type TipoDocumentoSomaVoutrosBaseCalcPisCofins = z.infer<
	typeof tipo_documentoSomaVoutrosBaseCalcPisCofinsSchema
>;

export type TipoDocumentoTipo = z.infer<typeof tipo_documentoTipoSchema>;

export type TipoDocumentoTipoRateioFrete = z.infer<
	typeof tipo_documentoTipoRateioFreteSchema
>;

export type TipoDocumentoTipoTributacao = z.infer<
	typeof tipo_documentoTipoTributacaoSchema
>;

export type TipoDocumentoTpNotaCredito = z.infer<
	typeof tipo_documentoTpNotaCreditoSchema
>;

export type TipoDocumentoTpNotaDebito = z.infer<
	typeof tipo_documentoTpNotaDebitoSchema
>;
