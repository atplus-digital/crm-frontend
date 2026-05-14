/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PEDIDOCOMPRA_FIELD_LABELS = {
	cancelamento_descricao: "cancelamento_descricao",
	data: "data",
	data_liberacao: "data_liberacao",
	filial_id: "filial_id",
	id: "id",
	id_colaborador: "id_colaborador",
	id_condicoes_pagamento: "id_condicoes_pagamento",
	id_fornecedor: "id_fornecedor",
	id_modelo: "id_modelo",
	obs: "obs",
	previsao_entrega: "previsao_entrega",
	previsao_faturamento: "previsao_faturamento",
	status: "status",
	status_liberado: "status_liberado",
	tipo_desconto: "tipo_desconto",
	tipo_frete: "tipo_frete",
	valor_desconto: "valor_desconto",
	valor_frete: "valor_frete",
	valor_negociado: "valor_negociado",
} as const;

export const PEDIDOCOMPRA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
} as const;

export const PEDIDOCOMPRA_STATUSLIBERADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PEDIDOCOMPRA_TIPODESCONTO_LABELS = {
	P: "P",
	V: "V",
} as const;

export const PEDIDOCOMPRA_TIPOFRETE_LABELS = {
	D: "D",
	E: "E",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pedido_compraStatusSchema = z.enum(["A", "F", "C"], {
	error: () => ({ message: "status: valores válidos são [A, F, C]" }),
});

export const pedido_compraStatusLiberadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status_liberado: valores válidos são [S, N]" }),
});

export const pedido_compraTipoDescontoSchema = z.enum(["P", "V"], {
	error: () => ({ message: "tipo_desconto: valores válidos são [P, V]" }),
});

export const pedido_compraTipoFreteSchema = z.enum(["D", "E", "S"], {
	error: () => ({ message: "tipo_frete: valores válidos são [D, E, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PedidoCompraStatus = z.infer<typeof pedido_compraStatusSchema>;

export type PedidoCompraStatusLiberado = z.infer<
	typeof pedido_compraStatusLiberadoSchema
>;

export type PedidoCompraTipoDesconto = z.infer<
	typeof pedido_compraTipoDescontoSchema
>;

export type PedidoCompraTipoFrete = z.infer<
	typeof pedido_compraTipoFreteSchema
>;
