/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cnf_classificacao_tributariaCfIpiTipoCalculoSchema,
	cnf_classificacao_tributariaCfTipoTributacaoSchema,
	cnf_classificacao_tributariaDescontarIcmsBaseCalculoCofinsSchema,
	cnf_classificacao_tributariaDescontarIcmsBaseCalculoSchema,
	cnf_classificacao_tributariaExcessaoStIsentosFustFunttelSchema,
	cnf_classificacao_tributariaExcessaoStReducaoFustFunttelSchema,
	cnf_classificacao_tributariaFinalidadeTributacaoSchema,
	cnf_classificacao_tributariaIcmsContribuinteSchema,
	cnf_classificacao_tributariaImpostoColSchema,
	cnf_classificacao_tributariaIpiDevolucaoObsSchema,
	cnf_classificacao_tributariaIrrfAcumularValorSchema,
	cnf_classificacao_tributariaIrrfTipoRetencaoSchema,
	cnf_classificacao_tributariaIsentaIvaColSchema,
	cnf_classificacao_tributariaIssBaseCalculoSchema,
	cnf_classificacao_tributariaRetencaoSiafiSchema,
	cnf_classificacao_tributariaTipoImpColSchema,
	cnf_classificacao_tributariaTipoOperacaoSchema,
	cnf_classificacao_tributariaTipoTributacaoSchema,
} from "./labels";

export const CNF_CLASSIFICACAO_TRIBUTARIA_TABLE_NAME =
	"cnf_classificacao_tributaria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_classificacao_tributariaBaseSchema = z.object({
	id: z.number(),
	aliquota_col: z.number(),
	base_calculo_cbs_ibs: z.number(),
	cf_aliquota_fcp: z.number(),
	cf_aliquota_icms: z.number(),
	cf_aliquota_ipi: z.number(),
	cf_bc_icms: z.number(),
	cf_cfop: z.number(),
	cf_cfop_f: z.number(),
	cf_cofins_alq: z.number(),
	cf_cofins_alq_retido: z.number(),
	cf_cofins_bc: z.number(),
	cf_cofins_valor: z.number(),
	cf_ex_tipi: z.string(),
	cf_icms_bc: z.number(),
	cf_id_fiscal: z.number(),
	cf_ii_alq: z.number(),
	cf_ii_bc: z.number(),
	cf_ii_desp_aduaneira: z.number(),
	cf_ii_di_adicao: z.string(),
	cf_ii_di_cod_fabricante: z.number(),
	cf_ii_di_seqadicao: z.number(),
	cf_ii_iof: z.number(),
	cf_ii_valor: z.number(),
	cf_ipi_classe_enquadramento: z.string(),
	cf_ipi_cnpj_produtor: z.string(),
	cf_ipi_codigo_enquadramento: z.string(),
	cf_ipi_codigo_selo_controle: z.string(),
	cf_ipi_sit_tributaria: z.string(),
	cf_ipi_tipo_calculo: cnf_classificacao_tributariaCfIpiTipoCalculoSchema,
	cf_iss_aliquota: z.number(),
	cf_iss_aliquota_retido: z.number(),
	cf_iss_municipio_ocorencia: z.number(),
	cf_iss_valor: z.number(),
	cf_iss_valor_base_calculo: z.number(),
	cf_ncm: z.string(),
	cf_pis_alq: z.number(),
	cf_pis_alq_retido: z.number(),
	cf_pis_bc: z.number(),
	cf_pis_valor: z.number(),
	cf_porcentagem_deferimento: z.number(),
	cf_tipo_tributacao: cnf_classificacao_tributariaCfTipoTributacaoSchema,
	cf_valor_base_ipi: z.number(),
	cf_valor_icms: z.number(),
	cf_valor_ipi: z.number(),
	cfops_remessa: z.string(),
	cnae: z.string(),
	cnae_complementar: z.string(),
	cod_benef: z.string(),
	cod_classificacao_tribut_cbs_ibs: z.string(),
	cod_situacao_tribut_cbs_ibs: z.string(),
	cod_tributacao_municipio: z.string(),
	codigo_classificacao_sped: z.string(),
	cofins_situacao_tributaria: z.string(),
	csll_aliquota: z.number(),
	descontar_icms_base_calculo:
		cnf_classificacao_tributariaDescontarIcmsBaseCalculoSchema,
	descontar_icms_base_calculo_cofins:
		cnf_classificacao_tributariaDescontarIcmsBaseCalculoCofinsSchema,
	descricao: z.string(),
	excessao_st_isentos_fust_funttel:
		cnf_classificacao_tributariaExcessaoStIsentosFustFunttelSchema,
	excessao_st_reducao_fust_funttel:
		cnf_classificacao_tributariaExcessaoStReducaoFustFunttelSchema,
	finalidade_tributacao: cnf_classificacao_tributariaFinalidadeTributacaoSchema,
	forma_tributacao: z.number(),
	icms_cfop: z.number(),
	icms_contribuinte: cnf_classificacao_tributariaIcmsContribuinteSchema,
	icms_csosn: z.string(),
	icms_difal_aliquota: z.number(),
	icms_fcp_aliquota: z.number(),
	icms_fcp_aliquota_st: z.number(),
	icms_modbcst: z.string(),
	icms_motdesicms: z.string(),
	icms_pbcop: z.number(),
	icms_pcredsn: z.number(),
	icms_picmsst: z.number(),
	icms_pmvast: z.number(),
	icms_predbc: z.number(),
	icms_predbcst: z.number(),
	icms_regime: z.number(),
	icms_sn_origem: z.number(),
	icms_sn_stributaria: z.string(),
	icms_uf: z.number(),
	icms_ufst: z.string(),
	icms_vbcst: z.number(),
	icms_vbcstdest: z.number(),
	icms_vbcstret: z.number(),
	icms_vcredicmssn: z.number(),
	icms_vicmsst: z.number(),
	icms_vicmsstdest: z.number(),
	icms_vicmsstret: z.number(),
	id_classificacao_padrao: z.number(),
	id_cnae: z.number(),
	id_externo_col: z.number(),
	id_natureza_operacao: z.number(),
	imposto_col: cnf_classificacao_tributariaImpostoColSchema,
	inss_aliquota: z.number(),
	ipi_devolucao_obs: cnf_classificacao_tributariaIpiDevolucaoObsSchema,
	irrf_acumular_valor: cnf_classificacao_tributariaIrrfAcumularValorSchema,
	irrf_aliquota: z.number(),
	irrf_tipo_retencao: cnf_classificacao_tributariaIrrfTipoRetencaoSchema,
	irrf_valor_minimo: z.number(),
	isenta_iva_col: cnf_classificacao_tributariaIsentaIvaColSchema,
	iss_aliquota: z.number(),
	iss_base_calculo: cnf_classificacao_tributariaIssBaseCalculoSchema,
	iss_incidencia: z.string(),
	iss_lista_servico: z.string(),
	iss_tributacao: z.string(),
	issqn_mun: z.number(),
	local_prestacao: z.string(),
	modBC: z.number(),
	nat_bc_cred: z.number(),
	p_funttel: z.number(),
	p_fust: z.number(),
	pis_situacao_tributaria: z.string(),
	proporcao_alicota_iva: z.number(),
	reducao_aliquota: z.number(),
	retencao_siafi: cnf_classificacao_tributariaRetencaoSiafiSchema,
	sn_alicota: z.number(),
	sn_aliquota_icms: z.number(),
	tipo_imp_col: cnf_classificacao_tributariaTipoImpColSchema,
	tipo_operacao: cnf_classificacao_tributariaTipoOperacaoSchema,
	tipo_tributacao: cnf_classificacao_tributariaTipoTributacaoSchema,
	uf_origem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_classificacao_tributariaSchema =
	cnf_classificacao_tributariaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_classificacao_tributariaCreateSchema =
	cnf_classificacao_tributariaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_classificacao_tributariaUpdateSchema =
	cnf_classificacao_tributariaCreateSchema.partial();
