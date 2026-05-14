/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CNFCLASSIFICACAOTRIBUTARIA_FIELD_LABELS = {
	aliquota_col: "aliquota_col",
	base_calculo_cbs_ibs: "base_calculo_cbs_ibs",
	cf_aliquota_fcp: "cf_aliquota_fcp",
	cf_aliquota_icms: "cf_aliquota_icms",
	cf_aliquota_ipi: "cf_aliquota_ipi",
	cf_bc_icms: "cf_bc_icms",
	cf_cfop: "cf_cfop",
	cf_cfop_f: "cf_cfop_f",
	cf_cofins_alq: "cf_cofins_alq",
	cf_cofins_alq_retido: "cf_cofins_alq_retido",
	cf_cofins_bc: "cf_cofins_bc",
	cf_cofins_valor: "cf_cofins_valor",
	cf_ex_tipi: "cf_ex_tipi",
	cf_icms_bc: "cf_icms_bc",
	cf_id_fiscal: "cf_id_fiscal",
	cf_ii_alq: "cf_ii_alq",
	cf_ii_bc: "cf_ii_bc",
	cf_ii_desp_aduaneira: "cf_ii_desp_aduaneira",
	cf_ii_di_adicao: "cf_ii_di_adicao",
	cf_ii_di_cod_fabricante: "cf_ii_di_cod_fabricante",
	cf_ii_di_seqadicao: "cf_ii_di_seqadicao",
	cf_ii_iof: "cf_ii_iof",
	cf_ii_valor: "cf_ii_valor",
	cf_ipi_classe_enquadramento: "cf_ipi_classe_enquadramento",
	cf_ipi_cnpj_produtor: "cf_ipi_cnpj_produtor",
	cf_ipi_codigo_enquadramento: "cf_ipi_codigo_enquadramento",
	cf_ipi_codigo_selo_controle: "cf_ipi_codigo_selo_controle",
	cf_ipi_sit_tributaria: "cf_ipi_sit_tributaria",
	cf_ipi_tipo_calculo: "cf_ipi_tipo_calculo",
	cf_iss_aliquota: "cf_iss_aliquota",
	cf_iss_aliquota_retido: "cf_iss_aliquota_retido",
	cf_iss_municipio_ocorencia: "cf_iss_municipio_ocorencia",
	cf_iss_valor: "cf_iss_valor",
	cf_iss_valor_base_calculo: "cf_iss_valor_base_calculo",
	cf_ncm: "cf_ncm",
	cf_pis_alq: "cf_pis_alq",
	cf_pis_alq_retido: "cf_pis_alq_retido",
	cf_pis_bc: "cf_pis_bc",
	cf_pis_valor: "cf_pis_valor",
	cf_porcentagem_deferimento: "cf_porcentagem_deferimento",
	cf_tipo_tributacao: "cf_tipo_tributacao",
	cf_valor_base_ipi: "cf_valor_base_ipi",
	cf_valor_icms: "cf_valor_icms",
	cf_valor_ipi: "cf_valor_ipi",
	cfops_remessa: "cfops_remessa",
	cnae: "cnae",
	cnae_complementar: "cnae_complementar",
	cod_benef: "cod_benef",
	cod_classificacao_tribut_cbs_ibs: "cod_classificacao_tribut_cbs_ibs",
	cod_situacao_tribut_cbs_ibs: "cod_situacao_tribut_cbs_ibs",
	cod_tributacao_municipio: "cod_tributacao_municipio",
	codigo_classificacao_sped: "codigo_classificacao_sped",
	cofins_situacao_tributaria: "cofins_situacao_tributaria",
	csll_aliquota: "csll_aliquota",
	descontar_icms_base_calculo: "descontar_icms_base_calculo",
	descontar_icms_base_calculo_cofins: "descontar_icms_base_calculo_cofins",
	descricao: "descricao",
	excessao_st_isentos_fust_funttel: "excessao_st_isentos_fust_funttel",
	excessao_st_reducao_fust_funttel: "excessao_st_reducao_fust_funttel",
	finalidade_tributacao: "finalidade_tributacao",
	forma_tributacao: "forma_tributacao",
	icms_cfop: "icms_cfop",
	icms_contribuinte: "icms_contribuinte",
	icms_csosn: "icms_csosn",
	icms_difal_aliquota: "icms_difal_aliquota",
	icms_fcp_aliquota: "icms_fcp_aliquota",
	icms_fcp_aliquota_st: "icms_fcp_aliquota_st",
	icms_modbcst: "icms_modbcst",
	icms_motdesicms: "icms_motdesicms",
	icms_pbcop: "icms_pbcop",
	icms_pcredsn: "icms_pcredsn",
	icms_picmsst: "icms_picmsst",
	icms_pmvast: "icms_pmvast",
	icms_predbc: "icms_predbc",
	icms_predbcst: "icms_predbcst",
	icms_regime: "icms_regime",
	icms_sn_origem: "icms_sn_origem",
	icms_sn_stributaria: "icms_sn_stributaria",
	icms_uf: "icms_uf",
	icms_ufst: "icms_ufst",
	icms_vbcst: "icms_vbcst",
	icms_vbcstdest: "icms_vbcstdest",
	icms_vbcstret: "icms_vbcstret",
	icms_vcredicmssn: "icms_vcredicmssn",
	icms_vicmsst: "icms_vicmsst",
	icms_vicmsstdest: "icms_vicmsstdest",
	icms_vicmsstret: "icms_vicmsstret",
	id: "id",
	id_classificacao_padrao: "id_classificacao_padrao",
	id_cnae: "id_cnae",
	id_externo_col: "id_externo_col",
	id_natureza_operacao: "id_natureza_operacao",
	imposto_col: "imposto_col",
	inss_aliquota: "inss_aliquota",
	ipi_devolucao_obs: "ipi_devolucao_obs",
	irrf_acumular_valor: "irrf_acumular_valor",
	irrf_aliquota: "irrf_aliquota",
	irrf_tipo_retencao: "irrf_tipo_retencao",
	irrf_valor_minimo: "irrf_valor_minimo",
	isenta_iva_col: "isenta_iva_col",
	iss_aliquota: "iss_aliquota",
	iss_base_calculo: "iss_base_calculo",
	iss_incidencia: "iss_incidencia",
	iss_lista_servico: "iss_lista_servico",
	iss_tributacao: "iss_tributacao",
	issqn_mun: "issqn_mun",
	local_prestacao: "local_prestacao",
	modBC: "modBC",
	nat_bc_cred: "nat_bc_cred",
	p_funttel: "p_funttel",
	p_fust: "p_fust",
	pis_situacao_tributaria: "pis_situacao_tributaria",
	proporcao_alicota_iva: "proporcao_alicota_iva",
	reducao_aliquota: "reducao_aliquota",
	retencao_siafi: "retencao_siafi",
	sn_alicota: "sn_alicota",
	sn_aliquota_icms: "sn_aliquota_icms",
	tipo_imp_col: "tipo_imp_col",
	tipo_operacao: "tipo_operacao",
	tipo_tributacao: "tipo_tributacao",
	uf_origem: "uf_origem",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_CFIPITIPOCALCULO_LABELS = {
	P: "P",
	V: "V",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_CFTIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
	NT: "NT",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_DESCONTARICMSBASECALCULO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_DESCONTARICMSBASECALCULOCOFINS_LABELS =
	{
		S: "S",
		N: "N",
	} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_EXCESSAOSTISENTOSFUSTFUNTTEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_EXCESSAOSTREDUCAOFUSTFUNTTEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_FINALIDADETRIBUTACAO_LABELS = {
	REM: "REM",
	RET: "RET",
	DEV: "DEV",
	COMP: "COMP",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_ICMSCONTRIBUINTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IMPOSTOCOL_LABELS = {
	iva: "iva",
	impoconsumo: "impoconsumo",
	reteiva: "reteiva",
	reteica: "reteica",
	retefuente: "retefuente",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IPIDEVOLUCAOOBS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IRRFACUMULARVALOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_IRRFTIPORETENCAO_LABELS = {
	CX: "CX",
	CP: "CP",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_ISENTAIVACOL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_ISSBASECALCULO_LABELS = {
	B: "B",
	O: "O",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_RETENCAOSIAFI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_TIPOIMPCOL_LABELS = {
	imposto: "imposto",
	retencao: "retencao",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_TIPOOPERACAO_LABELS = {
	E: "E",
	S: "S",
} as const;

export const CNFCLASSIFICACAOTRIBUTARIA_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cnf_classificacao_tributariaCfIpiTipoCalculoSchema = z.enum(
	["P", "V"],
	{
		error: () => ({
			message: "cf_ipi_tipo_calculo: valores válidos são [P, V]",
		}),
	},
);

export const cnf_classificacao_tributariaCfTipoTributacaoSchema = z.enum(
	["ICMS", "ISSQN", "NT"],
	{
		error: () => ({
			message: "cf_tipo_tributacao: valores válidos são [ICMS, ISSQN, NT]",
		}),
	},
);

export const cnf_classificacao_tributariaDescontarIcmsBaseCalculoSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "descontar_icms_base_calculo: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaDescontarIcmsBaseCalculoCofinsSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "descontar_icms_base_calculo_cofins: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaExcessaoStIsentosFustFunttelSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "excessao_st_isentos_fust_funttel: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaExcessaoStReducaoFustFunttelSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "excessao_st_reducao_fust_funttel: valores válidos são [S, N]",
		}),
	});

export const cnf_classificacao_tributariaFinalidadeTributacaoSchema = z.enum(
	["REM", "RET", "DEV", "COMP"],
	{
		error: () => ({
			message:
				"finalidade_tributacao: valores válidos são [REM, RET, DEV, COMP]",
		}),
	},
);

export const cnf_classificacao_tributariaIcmsContribuinteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "icms_contribuinte: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaImpostoColSchema = z.enum(
	["iva", "impoconsumo", "reteiva", "reteica", "retefuente"],
	{
		error: () => ({
			message:
				"imposto_col: valores válidos são [iva, impoconsumo, reteiva, reteica, retefuente]",
		}),
	},
);

export const cnf_classificacao_tributariaIpiDevolucaoObsSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "ipi_devolucao_obs: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaIrrfAcumularValorSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "irrf_acumular_valor: valores válidos são [S, N]",
		}),
	},
);

export const cnf_classificacao_tributariaIrrfTipoRetencaoSchema = z.enum(
	["CX", "CP"],
	{
		error: () => ({
			message: "irrf_tipo_retencao: valores válidos são [CX, CP]",
		}),
	},
);

export const cnf_classificacao_tributariaIsentaIvaColSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "isenta_iva_col: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaIssBaseCalculoSchema = z.enum(
	["B", "O"],
	{
		error: () => ({ message: "iss_base_calculo: valores válidos são [B, O]" }),
	},
);

export const cnf_classificacao_tributariaRetencaoSiafiSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "retencao_siafi: valores válidos são [S, N]" }),
	},
);

export const cnf_classificacao_tributariaTipoImpColSchema = z.enum(
	["imposto", "retencao"],
	{
		error: () => ({
			message: "tipo_imp_col: valores válidos são [imposto, retencao]",
		}),
	},
);

export const cnf_classificacao_tributariaTipoOperacaoSchema = z.enum(
	["E", "S"],
	{
		error: () => ({ message: "tipo_operacao: valores válidos são [E, S]" }),
	},
);

export const cnf_classificacao_tributariaTipoTributacaoSchema = z.enum(
	["ICMS", "ISSQN"],
	{
		error: () => ({
			message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CnfClassificacaoTributariaCfIpiTipoCalculo = z.infer<
	typeof cnf_classificacao_tributariaCfIpiTipoCalculoSchema
>;

export type CnfClassificacaoTributariaCfTipoTributacao = z.infer<
	typeof cnf_classificacao_tributariaCfTipoTributacaoSchema
>;

export type CnfClassificacaoTributariaDescontarIcmsBaseCalculo = z.infer<
	typeof cnf_classificacao_tributariaDescontarIcmsBaseCalculoSchema
>;

export type CnfClassificacaoTributariaDescontarIcmsBaseCalculoCofins = z.infer<
	typeof cnf_classificacao_tributariaDescontarIcmsBaseCalculoCofinsSchema
>;

export type CnfClassificacaoTributariaExcessaoStIsentosFustFunttel = z.infer<
	typeof cnf_classificacao_tributariaExcessaoStIsentosFustFunttelSchema
>;

export type CnfClassificacaoTributariaExcessaoStReducaoFustFunttel = z.infer<
	typeof cnf_classificacao_tributariaExcessaoStReducaoFustFunttelSchema
>;

export type CnfClassificacaoTributariaFinalidadeTributacao = z.infer<
	typeof cnf_classificacao_tributariaFinalidadeTributacaoSchema
>;

export type CnfClassificacaoTributariaIcmsContribuinte = z.infer<
	typeof cnf_classificacao_tributariaIcmsContribuinteSchema
>;

export type CnfClassificacaoTributariaImpostoCol = z.infer<
	typeof cnf_classificacao_tributariaImpostoColSchema
>;

export type CnfClassificacaoTributariaIpiDevolucaoObs = z.infer<
	typeof cnf_classificacao_tributariaIpiDevolucaoObsSchema
>;

export type CnfClassificacaoTributariaIrrfAcumularValor = z.infer<
	typeof cnf_classificacao_tributariaIrrfAcumularValorSchema
>;

export type CnfClassificacaoTributariaIrrfTipoRetencao = z.infer<
	typeof cnf_classificacao_tributariaIrrfTipoRetencaoSchema
>;

export type CnfClassificacaoTributariaIsentaIvaCol = z.infer<
	typeof cnf_classificacao_tributariaIsentaIvaColSchema
>;

export type CnfClassificacaoTributariaIssBaseCalculo = z.infer<
	typeof cnf_classificacao_tributariaIssBaseCalculoSchema
>;

export type CnfClassificacaoTributariaRetencaoSiafi = z.infer<
	typeof cnf_classificacao_tributariaRetencaoSiafiSchema
>;

export type CnfClassificacaoTributariaTipoImpCol = z.infer<
	typeof cnf_classificacao_tributariaTipoImpColSchema
>;

export type CnfClassificacaoTributariaTipoOperacao = z.infer<
	typeof cnf_classificacao_tributariaTipoOperacaoSchema
>;

export type CnfClassificacaoTributariaTipoTributacao = z.infer<
	typeof cnf_classificacao_tributariaTipoTributacaoSchema
>;
