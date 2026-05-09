/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	tipo_documentoAjustaPatrimonioSchema,
	tipo_documentoAlterarDescricaoNfSchema,
	tipo_documentoAtualizaCustoMedioSchema,
	tipo_documentoControleEstoqueSchema,
	tipo_documentoConverterTributacaoEntradaXmlSchema,
	tipo_documentoDescProdArqFiscaisSchema,
	tipo_documentoDescricaoProdutoNfSchema,
	tipo_documentoEmiteNfeEntradaSchema,
	tipo_documentoExibirTributosCsllIrrfSchema,
	tipo_documentoFinalidadeNfeTipoDocSchema,
	tipo_documentoFinanceiroLiberadoSchema,
	tipo_documentoGeraContabSchema,
	tipo_documentoGeraEstoqueSchema,
	tipo_documentoGeraFcemSpedSchema,
	tipo_documentoGeraFinanSchema,
	tipo_documentoGeraFiscalSchema,
	tipo_documentoGeraInternetSchema,
	tipo_documentoGeraMercadoriaSchema,
	tipo_documentoGerarFaturaSchema,
	tipo_documentoGerarProdutosValorZeradoSchema,
	tipo_documentoGeraServicosNfSchema,
	tipo_documentoGeraServicosSchema,
	tipo_documentoGeraSmpSchema,
	tipo_documentoGeraSvaSchema,
	tipo_documentoGeraTelefoniaSchema,
	tipo_documentoGeraTvSchema,
	tipo_documentoImpostometroSchema,
	tipo_documentoIrDescontaCofinsRetidoTotalSchema,
	tipo_documentoIrDescontaCsllRetidoTotalSchema,
	tipo_documentoIrDescontaInssRetidoTotalSchema,
	tipo_documentoIrDescontaIrrfRetidoTotalSchema,
	tipo_documentoIrDescontaIssRetidoTotalSchema,
	tipo_documentoIrDescontaPisRetidoTotalSchema,
	tipo_documentoIsentoIvaColSchema,
	tipo_documentoNfImportacaoSchema,
	tipo_documentoNumeroAutomaticoFaturaSiigoColSchema,
	tipo_documentoRegimeContabilizacaoSchema,
	tipo_documentoRegimeTributarioSchema,
	tipo_documentoSomaFreteBaseCalcPisCofinsSchema,
	tipo_documentoSomaFreteBaseCalcSchema,
	tipo_documentoSomaVoutrosBaseCalcPisCofinsSchema,
	tipo_documentoSomaVoutrosBaseCalcSchema,
	tipo_documentoTipoRateioFreteSchema,
	tipo_documentoTipoSchema,
	tipo_documentoTipoTributacaoSchema,
	tipo_documentoTpNotaCreditoSchema,
	tipo_documentoTpNotaDebitoSchema,
} from "./labels";

export const TIPO_DOCUMENTO_TABLE_NAME = "tipo_documento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tipo_documentoBaseSchema = z.object({
	id: z.number(),
	ajusta_patrimonio: tipo_documentoAjustaPatrimonioSchema,
	aliquota_cofins_tipo_doc: z.number(),
	aliquota_pis_tipo_doc: z.number(),
	alterar_descricao_nf: tipo_documentoAlterarDescricaoNfSchema,
	atualiza_custo_medio: tipo_documentoAtualizaCustoMedioSchema,
	codigo: z.number(),
	codigo_classificacao_sped: z.string(),
	codigo_consumo_energia: z.string(),
	controle_estoque: tipo_documentoControleEstoqueSchema,
	converter_tributacao_entrada_xml:
		tipo_documentoConverterTributacaoEntradaXmlSchema,
	cst_cofins_tipo_doc: z.string(),
	cst_pis_tipo_doc: z.string(),
	desc_prod_arq_fiscais: tipo_documentoDescProdArqFiscaisSchema,
	descricao_modelo_impressao: z.string(),
	descricao_produto_nf: tipo_documentoDescricaoProdutoNfSchema,
	emite_nfe_entrada: tipo_documentoEmiteNfeEntradaSchema,
	exibir_tributos_csll_irrf: tipo_documentoExibirTributosCsllIrrfSchema,
	finalidade_nfe_tipo_doc: tipo_documentoFinalidadeNfeTipoDocSchema,
	financeiro_liberado: tipo_documentoFinanceiroLiberadoSchema,
	gera_contab: tipo_documentoGeraContabSchema,
	gera_estoque: tipo_documentoGeraEstoqueSchema,
	gera_fcem_sped: tipo_documentoGeraFcemSpedSchema,
	gera_finan: tipo_documentoGeraFinanSchema,
	gera_fiscal: tipo_documentoGeraFiscalSchema,
	gera_internet: tipo_documentoGeraInternetSchema,
	gera_mercadoria: tipo_documentoGeraMercadoriaSchema,
	gera_servicos: tipo_documentoGeraServicosSchema,
	gera_servicos_nf: tipo_documentoGeraServicosNfSchema,
	gera_smp: tipo_documentoGeraSmpSchema,
	gera_sva: tipo_documentoGeraSvaSchema,
	gera_telefonia: tipo_documentoGeraTelefoniaSchema,
	gera_tv: tipo_documentoGeraTvSchema,
	gerar_fatura: tipo_documentoGerarFaturaSchema,
	gerar_produtos_valor_zerado: tipo_documentoGerarProdutosValorZeradoSchema,
	grupo_tensao_energia: z.string(),
	id_almox_padrao: z.number(),
	id_classificacao_tributaria_col: z.number(),
	id_cnf_grade_ctb: z.number(),
	id_cnf_grade_ctb_cancelamento: z.number(),
	id_filial: z.number(),
	impostometro: tipo_documentoImpostometroSchema,
	indPres: z.string(),
	ir_desconta_cofins_retido_total:
		tipo_documentoIrDescontaCofinsRetidoTotalSchema,
	ir_desconta_csll_retido_total: tipo_documentoIrDescontaCsllRetidoTotalSchema,
	ir_desconta_inss_retido_total: tipo_documentoIrDescontaInssRetidoTotalSchema,
	ir_desconta_irrf_retido_total: tipo_documentoIrDescontaIrrfRetidoTotalSchema,
	ir_desconta_iss_retido_total: tipo_documentoIrDescontaIssRetidoTotalSchema,
	ir_desconta_pis_retido_total: tipo_documentoIrDescontaPisRetidoTotalSchema,
	isento_iva_col: tipo_documentoIsentoIvaColSchema,
	mask_entrada_quantidade: z.number(),
	mask_entrada_valor_unit: z.number(),
	mask_saida_quantidade: z.number(),
	mask_saida_valor_unit: z.number(),
	modelo_impressao_nota: z.number(),
	modelo_impressao_nota_col: z.string(),
	modelo_nf: z.string(),
	nat_bc_cred: z.number(),
	natureza_dentro_estado: z.string(),
	natureza_fora_estado: z.string(),
	natureza_operacao: z.string(),
	nf_complementar_comodato_entrada: z.string(),
	nf_complementar_comodato_saida: z.string(),
	nf_complementar_tp_doc: z.string(),
	nf_importacao: tipo_documentoNfImportacaoSchema,
	numero_automatico_fatura_siigo_col:
		tipo_documentoNumeroAutomaticoFaturaSiigoColSchema,
	regime_contabilizacao: tipo_documentoRegimeContabilizacaoSchema,
	regime_tributario: tipo_documentoRegimeTributarioSchema,
	serie_nf: z.string(),
	soma_frete_base_calc: tipo_documentoSomaFreteBaseCalcSchema,
	soma_frete_base_calc_pis_cofins:
		tipo_documentoSomaFreteBaseCalcPisCofinsSchema,
	soma_voutros_base_calc: tipo_documentoSomaVoutrosBaseCalcSchema,
	soma_voutros_base_calc_pis_cofins:
		tipo_documentoSomaVoutrosBaseCalcPisCofinsSchema,
	tipo: tipo_documentoTipoSchema,
	tipo_documento: z.string(),
	tipo_ligacao_energia: z.string(),
	tipo_rateio_frete: tipo_documentoTipoRateioFreteSchema,
	tipo_receita_sped: z.string(),
	tipo_transacao: z.string(),
	tipo_tributacao: tipo_documentoTipoTributacaoSchema,
	tp_nota_credito: tipo_documentoTpNotaCreditoSchema,
	tp_nota_debito: tipo_documentoTpNotaDebitoSchema,
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tipo_documentoSchema = tipo_documentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tipo_documentoCreateSchema = tipo_documentoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tipo_documentoUpdateSchema = tipo_documentoCreateSchema.partial();
