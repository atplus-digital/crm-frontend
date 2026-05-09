/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type EntradaPedido = z.infer<
	typeof import("./schemas").entrada_pedidoSchema
>;
export type EntradaPedidoRelations = Record<string, never>;

export type EntradaPedidoRelationKey = keyof EntradaPedidoRelations;
