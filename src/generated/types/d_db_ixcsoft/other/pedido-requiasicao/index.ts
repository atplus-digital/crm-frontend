/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PedidoRequiasicao = z.infer<
	typeof import("./schemas").pedido_requiasicaoSchema
>;
export type PedidoRequiasicaoRelations = Record<string, never>;

export type PedidoRequiasicaoRelationKey = keyof PedidoRequiasicaoRelations;
