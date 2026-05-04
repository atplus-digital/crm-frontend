/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_areceberAguardandoConfirmacaoPagamentoSchema,
	fn_areceberArquivoRemessaBaixadoSchema,
	fn_areceberEmCobrancaSchema,
	fn_areceberEstornadoSchema,
	fn_areceberEtapaEnvioReguaSchema,
	fn_areceberFormaRecebimentoSchema,
	fn_areceberImpressoSchema,
	fn_areceberLiberaPeriodoSchema,
	fn_areceberMotivoAlteracaoSchema,
	fn_areceberParceladoCartaoSchema,
	fn_areceberPixStatusRecorrenteSchema,
	fn_areceberPrevisaoSchema,
	fn_areceberRecebidoPorRecorrenciaSchema,
	fn_areceberRecebidoViaPixSchema,
	fn_areceberStatusCobrancaReguaSchema,
	fn_areceberStatusSchema,
	fn_areceberTipoCobrancaPixSchema,
	fn_areceberTipoCobrancaSchema,
	fn_areceberTipoRecebimentoSchema,
	fn_areceberTituloImportadoSchema,
	fn_areceberTituloProtestadoSchema,
	fn_areceberTituloRenegociadoSchema,
} from "./labels";

export const FN_ARECEBER_TABLE_NAME = "fn_areceber";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceberBaseSchema = z.object({
	id: z.number(),
	aguardando_confirmacao_pagamento:
		fn_areceberAguardandoConfirmacaoPagamentoSchema,
	arquivo_remessa_baixado: fn_areceberArquivoRemessaBaixadoSchema,
	baixa_automatica: z.string(),
	baixa_data: z.string(),
	baixa_id_operador: z.string(),
	bandeira_pagamento: z.string(),
	boleto: z.number(),
	caixa: z.number(),
	cancelamento_id_operador: z.string(),
	charge_id: z.string(),
	conta_recebimento: z.string(),
	credit_card_transaction_id: z.string(),
	credito_data: z.string(),
	data_cancelamento: z.string(),
	data_cotacao_diaria: z.string(),
	data_emissao: z.string(),
	data_fin_cdr_voip: z.string(),
	data_final: z.string(),
	data_final_ligacoes: z.string(),
	data_ini_cdr_voip: z.string(),
	data_inicial: z.string(),
	data_inicial_ligacoes: z.string(),
	data_vencimento: z.string(),
	desconto_condicional_valor: z.string(),
	descontos_adicionais: z.string(),
	documento: z.string(),
	duplicata: z.string(),
	em_processamento: z.string(),
	enviado_remessa_baixa: z.string(),
	estornado: fn_areceberEstornadoSchema,
	filial_id: z.number(),
	forma_recebimento: fn_areceberFormaRecebimentoSchema,
	gateway_link: z.string(),
	gerencianet_token: z.string(),
	id_assinatura_cliente: z.number(),
	id_carteira_cobranca: z.number(),
	id_cliente: z.number(),
	id_cobranca: z.string(),
	id_conta: z.number(),
	id_contrato: z.number(),
	id_contrato_avulso: z.string(),
	id_contrato_principal: z.string(),
	id_im_imovel: z.string(),
	id_lote_geracao_financeiro: z.string(),
	id_lote_geracao_financeiro_fatura: z.string(),
	id_mot_cancelamento: z.string(),
	id_nota_gerada: z.number(),
	id_nota_gerada_opc2: z.string(),
	id_nota_gerada_opc3: z.string(),
	id_nota_gerada_opc4: z.string(),
	id_remessa: z.number(),
	id_remessa_alteracao: z.string(),
	id_remessa_baixa: z.string(),
	id_renegociacao: z.string(),
	id_renegociacao_novo: z.string(),
	id_saida: z.number(),
	id_sip: z.string(),
	ids_contratos_origem: z.string(),
	ids_faturas_origem: z.string(),
	impresso: fn_areceberImpressoSchema,
	libera_periodo: fn_areceberLiberaPeriodoSchema,
	liberado: z.string(),
	linha_digitavel: z.string(),
	lote: z.number(),
	moeda: z.string(),
	motivo_alteracao: fn_areceberMotivoAlteracaoSchema,
	nn_boleto: z.string(),
	nparcela: z.number(),
	numero_parcela_recorrente: z.string(),
	obs: z.string(),
	origem_importacao: z.string(),
	pagamento_data: z.string(),
	pagamento_valor: z.string(),
	parcela_proporcional: z.string(),
	parcelado_cartao: fn_areceberParceladoCartaoSchema,
	pix_id_carteira_cobranca: z.string(),
	pix_status: z.string(),
	pix_status_recorrente: fn_areceberPixStatusRecorrenteSchema,
	pix_txid: z.string(),
	pix_txid_recorrente: z.string(),
	previsao: fn_areceberPrevisaoSchema,
	recebido_via_pix: fn_areceberRecebidoViaPixSchema,
	status: fn_areceberStatusSchema,
	status_cobranca: z.string(),
	status_remessa: z.string(),
	tarifa_gateway_lancada: z.string(),
	tipo_cobranca: fn_areceberTipoCobrancaSchema,
	tipo_pagamento_cartao: z.string(),
	tipo_recebimento: fn_areceberTipoRecebimentoSchema,
	tipo_renegociacao: z.string(),
	titulo_importado: fn_areceberTituloImportadoSchema,
	titulo_negativacao_integracao: z.string(),
	titulo_protestado: fn_areceberTituloProtestadoSchema,
	titulo_renegociado: fn_areceberTituloRenegociadoSchema,
	ultima_atualizacao: z.string(),
	validade_desconto_condicional: z.string(),
	valor: z.string(),
	valor_aberto: z.string(),
	valor_ate_vencimento: z.string(),
	valor_cancelado: z.string(),
	valor_cotacao_diaria: z.string(),
	valor_desconto_ate_vencimento: z.string(),
	valor_juros_multa: z.string(),
	valor_moeda_original: z.string(),
	valor_recebido: z.string(),
	valor_total_com_juros: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const fn_areceberRelationSchema = z.object({
	f_carteira_cobranca: z.number().nullable(),
	f_cliente: z.number().nullable(),
	f_conta: z.number().nullable(),
	f_conta_class_finan_a: z.number().nullable(),
	f_filial: z.number().nullable(),
	f_lote_geracao_financeiro_fatura: z.number().nullable(),
	f_renegociacao: z.number().nullable(),
	f_renegociacao_novo: z.number().nullable(),
	f_saida: z.number().nullable(),
	f_sip: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceberSchema = fn_areceberBaseSchema.merge(
	fn_areceberRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceberCreateSchema = fn_areceberSchema.omit({
	f_carteira_cobranca: true,
	f_cliente: true,
	f_conta: true,
	f_conta_class_finan_a: true,
	f_filial: true,
	f_lote_geracao_financeiro_fatura: true,
	f_renegociacao: true,
	f_renegociacao_novo: true,
	f_saida: true,
	f_sip: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceberUpdateSchema = fn_areceberCreateSchema.partial();
