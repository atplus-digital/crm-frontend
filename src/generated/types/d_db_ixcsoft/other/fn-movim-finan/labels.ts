/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNMOVIMFINAN_FIELD_LABELS = {
	atualizado_por: "atualizado_por",
	cancelamento: "cancelamento",
	centro_custo_regra_criterio: "centro_custo_regra_criterio",
	centro_resultado_regra_criterio: "centro_resultado_regra_criterio",
	chave_recebimento: "chave_recebimento",
	chave_recebimento_unico: "chave_recebimento_unico",
	conciliado: "conciliado",
	conciliado_extrato: "conciliado_extrato",
	conciliado_fn: "conciliado_fn",
	conta_: "conta_",
	credito: "credito",
	data: "data",
	data_pagamento: "data_pagamento",
	data_recebimento: "data_recebimento",
	debito: "debito",
	debito_aux_composto: "debito_aux_composto",
	descontos_adicionais: "descontos_adicionais",
	documento: "documento",
	estrutura_centro_custo_centro_resultado:
		"estrutura_centro_custo_centro_resultado",
	filial_id: "filial_id",
	historico: "historico",
	id: "id",
	id_adiantamento_cliente: "id_adiantamento_cliente",
	id_adiantamento_fornecedor: "id_adiantamento_fornecedor",
	id_ajuste_estoque: "id_ajuste_estoque",
	id_arquivo_importado: "id_arquivo_importado",
	id_baixa_lote: "id_baixa_lote",
	id_centro_custo_categoria_filtro: "id_centro_custo_categoria_filtro",
	id_centro_custo_criterio_rateio: "id_centro_custo_criterio_rateio",
	id_centro_custo_criterio_rateio_centro_resultado:
		"id_centro_custo_criterio_rateio_centro_resultado",
	id_centro_custo_projeto: "id_centro_custo_projeto",
	id_centro_custo_rel_centro_custo_categoria:
		"id_centro_custo_rel_centro_custo_categoria",
	id_centro_resultado_rel_centro_custo_categoria:
		"id_centro_resultado_rel_centro_custo_categoria",
	id_classe_finan: "id_classe_finan",
	id_cli_aux_rec: "id_cli_aux_rec",
	id_conciliacao_lote: "id_conciliacao_lote",
	id_conta: "id_conta",
	id_conta_class_finan_a: "id_conta_class_finan_a",
	id_entrada: "id_entrada",
	id_fn_tranferencia_caixa: "id_fn_tranferencia_caixa",
	id_fornecedor: "id_fornecedor",
	id_grade_contabil: "id_grade_contabil",
	id_inventario: "id_inventario",
	id_lote_retorno: "id_lote_retorno",
	id_motivo_desconto: "id_motivo_desconto",
	id_movim_cheque: "id_movim_cheque",
	id_movim_finan: "id_movim_finan",
	id_movimento_produto_comodato: "id_movimento_produto_comodato",
	id_operador: "id_operador",
	id_origem: "id_origem",
	id_pagar: "id_pagar",
	id_receber: "id_receber",
	id_renegociacao: "id_renegociacao",
	id_saida: "id_saida",
	id_transf_almox: "id_transf_almox",
	pacrescimo: "pacrescimo",
	pdesconto: "pdesconto",
	registrado_em: "registrado_em",
	registrado_por: "registrado_por",
	sistema_origem: "sistema_origem",
	tipo_lanc: "tipo_lanc",
	tipo_recebimento: "tipo_recebimento",
	ultima_atualizacao: "ultima_atualizacao",
	vacrescimo: "vacrescimo",
	valor_liquido_recebido: "valor_liquido_recebido",
	valor_recebido_dinheiro: "valor_recebido_dinheiro",
	valor_troco: "valor_troco",
	vdesconto: "vdesconto",
	vencimento: "vencimento",
} as const;

export const FNMOVIMFINAN_CENTROCUSTOREGRACRITERIO_LABELS = {
	CE: "CE",
	CR: "CR",
} as const;

export const FNMOVIMFINAN_CENTRORESULTADOREGRACRITERIO_LABELS = {
	CER: "CER",
	CR: "CR",
} as const;

export const FNMOVIMFINAN_CONCILIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNMOVIMFINAN_ESTRUTURACENTROCUSTOCENTRORESULTADO_LABELS = {
	CC: "CC",
	CR: "CR",
} as const;

export const FNMOVIMFINAN_TIPOLANC_LABELS = {
	M: "M",
	P: "P",
	R: "R",
	D: "D",
	C: "C",
	AC: "AC",
	AF: "AF",
	T: "T",
} as const;

export const FNMOVIMFINAN_TIPORECEBIMENTO_LABELS = {
	D: "D",
	H: "H",
	C: "C",
	CD: "CD",
	DP: "DP",
	T: "T",
	P: "P",
	DC: "DC",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_movim_finanCentroCustoRegraCriterioSchema = z.enum(
	["CE", "CR"],
	{
		error: () => ({
			message: "centro_custo_regra_criterio: valores válidos são [CE, CR]",
		}),
	},
);

export const fn_movim_finanCentroResultadoRegraCriterioSchema = z.enum(
	["CER", "CR"],
	{
		error: () => ({
			message: "centro_resultado_regra_criterio: valores válidos são [CER, CR]",
		}),
	},
);

export const fn_movim_finanConciliadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "conciliado: valores válidos são [S, N]" }),
});

export const fn_movim_finanEstruturaCentroCustoCentroResultadoSchema = z.enum(
	["CC", "CR"],
	{
		error: () => ({
			message:
				"estrutura_centro_custo_centro_resultado: valores válidos são [CC, CR]",
		}),
	},
);

export const fn_movim_finanTipoLancSchema = z.enum(
	["M", "P", "R", "D", "C", "AC", "AF", "T"],
	{
		error: () => ({
			message: "tipo_lanc: valores válidos são [M, P, R, D, C, AC, AF, T]",
		}),
	},
);

export const fn_movim_finanTipoRecebimentoSchema = z.enum(
	["D", "H", "C", "CD", "DP", "T", "P", "DC", "B"],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [D, H, C, CD, DP, T, P, DC, B]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnMovimFinanCentroCustoRegraCriterio = z.infer<
	typeof fn_movim_finanCentroCustoRegraCriterioSchema
>;

export type FnMovimFinanCentroResultadoRegraCriterio = z.infer<
	typeof fn_movim_finanCentroResultadoRegraCriterioSchema
>;

export type FnMovimFinanConciliado = z.infer<
	typeof fn_movim_finanConciliadoSchema
>;

export type FnMovimFinanEstruturaCentroCustoCentroResultado = z.infer<
	typeof fn_movim_finanEstruturaCentroCustoCentroResultadoSchema
>;

export type FnMovimFinanTipoLanc = z.infer<typeof fn_movim_finanTipoLancSchema>;

export type FnMovimFinanTipoRecebimento = z.infer<
	typeof fn_movim_finanTipoRecebimentoSchema
>;
