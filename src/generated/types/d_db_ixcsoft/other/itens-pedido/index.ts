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
export type ItensPedido = z.infer<
	typeof import("./schemas").itens_pedidoSchema
>;
export type ItensPedidoRelations = Record<string, never>;

export type ItensPedidoRelationKey = keyof ItensPedidoRelations;
