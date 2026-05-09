/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_fn_areceberArquivoRemessaBaixadoSchema,
	relatorio_fn_areceberBaixaAutomaticaSchema,
	relatorio_fn_areceberContratoSchema,
	relatorio_fn_areceberEnviadoRemessaBaixaSchema,
	relatorio_fn_areceberEstornoRecebimentoSchema,
	relatorio_fn_areceberFormaRecebimentoSchema,
	relatorio_fn_areceberImpressoSchema,
	relatorio_fn_areceberLiberadoSchema,
	relatorio_fn_areceberLiberaPeriodoSchema,
	relatorio_fn_areceberParceladoCartaoSchema,
	relatorio_fn_areceberParcelaProporcionalSchema,
	relatorio_fn_areceberPrevisaoSchema,
	relatorio_fn_areceberRecebidoViaPixSchema,
	relatorio_fn_areceberStatusSchema,
	relatorio_fn_areceberTipoCobrancaSchema,
	relatorio_fn_areceberTipoDataCancelamentoSchema,
	relatorio_fn_areceberTipoDataEmissaoSchema,
	relatorio_fn_areceberTipoDataPagamentoSchema,
	relatorio_fn_areceberTipoDataVencimentoSchema,
	relatorio_fn_areceberTipoRecebimentoSchema,
	relatorio_fn_areceberTipoRenegociacaoSchema,
	relatorio_fn_areceberTituloProtestadoSchema,
	relatorio_fn_areceberTypeOfPersonSchema,
} from "./labels";

export const RELATORIO_FN_ARECEBER_TABLE_NAME = "relatorio_fn_areceber";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_fn_areceberBaseSchema = z.object({
	id: z.number(),
	apartamento: z.string(),
	arquivo_remessa_baixado: relatorio_fn_areceberArquivoRemessaBaixadoSchema,
	bairro: z.string(),
	baixa_automatica: relatorio_fn_areceberBaixaAutomaticaSchema,
	caixa: z.number(),
	cep: z.string(),
	cidade: z.number(),
	condominio: z.number(),
	contrato: relatorio_fn_areceberContratoSchema,
	creation_date: z.string(),
	creation_user: z.string(),
	data_cancelamento_final: z.string(),
	data_cancelamento_inicial: z.string(),
	data_cancelamento_periodo: z.string(),
	data_emissao_final: z.string(),
	data_emissao_inicial: z.string(),
	data_emissao_periodo: z.string(),
	data_pagamento_final: z.string(),
	data_pagamento_inicial: z.string(),
	data_ultima_impres: z.string(),
	data_vencimento_final: z.string(),
	data_vencimento_inicial: z.string(),
	data_vencimento_periodo: z.string(),
	endereco: z.string(),
	enviado_remessa_baixa: relatorio_fn_areceberEnviadoRemessaBaixaSchema,
	estorno_recebimento: relatorio_fn_areceberEstornoRecebimentoSchema,
	filial_id: z.number(),
	forma_recebimento: relatorio_fn_areceberFormaRecebimentoSchema,
	id_carteira_cobranca: z.number(),
	id_cliente: z.number(),
	id_condominio: z.number(),
	id_conta: z.number(),
	id_filial_cadastro_cliente: z.number(),
	id_lote_geracao_financeiro_fatura: z.number(),
	id_mot_cancelamento: z.number(),
	id_remessa: z.number(),
	id_remessa_baixa: z.number(),
	id_renegociacao: z.number(),
	id_saida: z.number(),
	id_tipo_cliente: z.number(),
	impresso: relatorio_fn_areceberImpressoSchema,
	impresso_por: z.number(),
	libera_periodo: relatorio_fn_areceberLiberaPeriodoSchema,
	liberado: relatorio_fn_areceberLiberadoSchema,
	lote: z.number(),
	nome: z.string(),
	pagamento_data_periodo: z.string(),
	pagamento_valor: z.number(),
	pagamento_valor_condicao: z.string(),
	parcela_proporcional: relatorio_fn_areceberParcelaProporcionalSchema,
	parcelado_cartao: relatorio_fn_areceberParceladoCartaoSchema,
	pix_id_carteira_cobranca: z.number(),
	previsao: relatorio_fn_areceberPrevisaoSchema,
	recebido_via_pix: relatorio_fn_areceberRecebidoViaPixSchema,
	relatorio: z.string(),
	status: relatorio_fn_areceberStatusSchema,
	status_cobranca: z.string(),
	tipo_cobranca: relatorio_fn_areceberTipoCobrancaSchema,
	tipo_data_cancelamento: relatorio_fn_areceberTipoDataCancelamentoSchema,
	tipo_data_emissao: relatorio_fn_areceberTipoDataEmissaoSchema,
	tipo_data_pagamento: relatorio_fn_areceberTipoDataPagamentoSchema,
	tipo_data_vencimento: relatorio_fn_areceberTipoDataVencimentoSchema,
	tipo_recebimento: relatorio_fn_areceberTipoRecebimentoSchema,
	tipo_renegociacao: relatorio_fn_areceberTipoRenegociacaoSchema,
	titulo_protestado: relatorio_fn_areceberTituloProtestadoSchema,
	type_of_person: relatorio_fn_areceberTypeOfPersonSchema,
	valor: z.number(),
	valor_aberto: z.number(),
	valor_aberto_condicao: z.string(),
	valor_cancelado: z.number(),
	valor_cancelado_condicao: z.string(),
	valor_condicao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_fn_areceberSchema = relatorio_fn_areceberBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_fn_areceberCreateSchema =
	relatorio_fn_areceberSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_fn_areceberUpdateSchema =
	relatorio_fn_areceberCreateSchema.partial();
