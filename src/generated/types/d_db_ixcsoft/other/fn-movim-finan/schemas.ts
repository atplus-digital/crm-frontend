/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_movim_finanCentroCustoRegraCriterioSchema,
	fn_movim_finanCentroResultadoRegraCriterioSchema,
	fn_movim_finanConciliadoSchema,
	fn_movim_finanEstruturaCentroCustoCentroResultadoSchema,
	fn_movim_finanTipoLancSchema,
	fn_movim_finanTipoRecebimentoSchema,
} from "./labels";

export const FN_MOVIM_FINAN_TABLE_NAME = "fn_movim_finan";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_movim_finanBaseSchema = z.object({
	id: z.number(),
	atualizado_por: z.string(),
	cancelamento: z.string(),
	centro_custo_regra_criterio: fn_movim_finanCentroCustoRegraCriterioSchema,
	centro_resultado_regra_criterio:
		fn_movim_finanCentroResultadoRegraCriterioSchema,
	chave_recebimento: z.string(),
	chave_recebimento_unico: z.string(),
	conciliado: fn_movim_finanConciliadoSchema,
	conciliado_extrato: z.string(),
	conciliado_fn: z.string(),
	conta_: z.number(),
	credito: z.number(),
	data: z.string(),
	data_pagamento: z.string(),
	data_recebimento: z.string(),
	debito: z.number(),
	debito_aux_composto: z.number(),
	descontos_adicionais: z.number(),
	documento: z.string(),
	estrutura_centro_custo_centro_resultado:
		fn_movim_finanEstruturaCentroCustoCentroResultadoSchema,
	filial_id: z.number(),
	historico: z.string(),
	id_adiantamento_cliente: z.number(),
	id_adiantamento_fornecedor: z.number(),
	id_ajuste_estoque: z.number(),
	id_arquivo_importado: z.number(),
	id_baixa_lote: z.number(),
	id_centro_custo_categoria_filtro: z.number(),
	id_centro_custo_criterio_rateio: z.number(),
	id_centro_custo_criterio_rateio_centro_resultado: z.number(),
	id_centro_custo_projeto: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_centro_resultado_rel_centro_custo_categoria: z.number(),
	id_classe_finan: z.number(),
	id_cli_aux_rec: z.number(),
	id_conciliacao_lote: z.number(),
	id_conta: z.number(),
	id_conta_class_finan_a: z.number(),
	id_entrada: z.number(),
	id_fn_tranferencia_caixa: z.number(),
	id_fornecedor: z.number(),
	id_grade_contabil: z.number(),
	id_inventario: z.number(),
	id_lote_retorno: z.number(),
	id_motivo_desconto: z.number(),
	id_movim_cheque: z.number(),
	id_movim_finan: z.number(),
	id_movimento_produto_comodato: z.number(),
	id_operador: z.number(),
	id_origem: z.number(),
	id_pagar: z.number(),
	id_receber: z.number(),
	id_renegociacao: z.number(),
	id_saida: z.number(),
	id_transf_almox: z.number(),
	pacrescimo: z.number(),
	pdesconto: z.number(),
	registrado_em: z.string(),
	registrado_por: z.string(),
	sistema_origem: z.number(),
	tipo_lanc: fn_movim_finanTipoLancSchema,
	tipo_recebimento: fn_movim_finanTipoRecebimentoSchema,
	ultima_atualizacao: z.string(),
	vacrescimo: z.number(),
	valor_liquido_recebido: z.number(),
	valor_recebido_dinheiro: z.number(),
	valor_troco: z.number(),
	vdesconto: z.number(),
	vencimento: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_movim_finanSchema = fn_movim_finanBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_movim_finanCreateSchema = fn_movim_finanSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_movim_finanUpdateSchema = fn_movim_finanCreateSchema.partial();
