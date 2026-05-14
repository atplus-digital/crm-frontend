/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ITENSPEDIDO_FIELD_LABELS = {
	assistencia: "assistencia",
	codigo: "codigo",
	comissao: "comissao",
	composicao: "composicao",
	data_carregamento: "data_carregamento",
	data_corte: "data_corte",
	data_montagem: "data_montagem",
	desconto: "desconto",
	descricao_produto: "descricao_produto",
	fator_conv_unidade: "fator_conv_unidade",
	filial_id: "filial_id",
	id: "id",
	id_almox: "id_almox",
	id_carregamento: "id_carregamento",
	id_corte_tecido: "id_corte_tecido",
	id_filial: "id_filial",
	id_moeda: "id_moeda",
	id_pedido: "id_pedido",
	id_prioridade: "id_prioridade",
	id_produto: "id_produto",
	id_saida: "id_saida",
	id_unidade: "id_unidade",
	modulos: "modulos",
	obs: "obs",
	pecas: "pecas",
	percentual_desconto: "percentual_desconto",
	produto: "produto",
	qtde: "qtde",
	qtde_saldo: "qtde_saldo",
	qtde_tecido_almofadas: "qtde_tecido_almofadas",
	qtde_tecido_base: "qtde_tecido_base",
	saldo_cancelado: "saldo_cancelado",
	status_item: "status_item",
	tecido: "tecido",
	tipo: "tipo",
	valor: "valor",
	valor_comissao: "valor_comissao",
	valor_temp: "valor_temp",
	valor_total: "valor_total",
} as const;

export const ITENSPEDIDO_ASSISTENCIA_LABELS = {
	N: "N",
	S: "S",
} as const;

export const ITENSPEDIDO_TIPO_LABELS = {
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const itens_pedidoAssistenciaSchema = z.enum(["N", "S"], {
	error: () => ({ message: "assistencia: valores válidos são [N, S]" }),
});

export const itens_pedidoTipoSchema = z.enum(["S"], {
	error: () => ({ message: "tipo: valores válidos são [S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ItensPedidoAssistencia = z.infer<
	typeof itens_pedidoAssistenciaSchema
>;

export type ItensPedidoTipo = z.infer<typeof itens_pedidoTipoSchema>;
