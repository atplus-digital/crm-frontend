/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PedidoCompra = z.infer<
	typeof import("./schemas").pedido_compraSchema
>;
export type PedidoCompraRelations = Record<string, never>;

export type PedidoCompraRelationKey = keyof PedidoCompraRelations;
