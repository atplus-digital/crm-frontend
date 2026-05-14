/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PEDIDOCOMPRAITENS_FIELD_LABELS = {
	descricao_alt: "descricao_alt",
	filial_id: "filial_id",
	id: "id",
	id_entrada: "id_entrada",
	id_pedido_compra: "id_pedido_compra",
	id_produto: "id_produto",
	id_unidade: "id_unidade",
	observacao: "observacao",
	quantidade: "quantidade",
	status: "status",
	tipo: "tipo",
	unidade_sigla: "unidade_sigla",
	valor_total: "valor_total",
	valor_unitario: "valor_unitario",
} as const;

export const PEDIDOCOMPRAITENS_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

export const PEDIDOCOMPRAITENS_TIPO_LABELS = {
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pedido_compra_itensStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

export const pedido_compra_itensTipoSchema = z.enum(["E"], {
	error: () => ({ message: "tipo: valores válidos são [E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PedidoCompraItensStatus = z.infer<
	typeof pedido_compra_itensStatusSchema
>;

export type PedidoCompraItensTipo = z.infer<
	typeof pedido_compra_itensTipoSchema
>;
