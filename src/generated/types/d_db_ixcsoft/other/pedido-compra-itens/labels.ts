/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
