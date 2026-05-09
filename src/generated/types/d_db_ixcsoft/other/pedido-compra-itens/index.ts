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
export type PedidoCompraItens = z.infer<
	typeof import("./schemas").pedido_compra_itensSchema
>;
export type PedidoCompraItensRelations = Record<string, never>;

export type PedidoCompraItensRelationKey = keyof PedidoCompraItensRelations;
