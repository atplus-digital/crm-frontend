/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VdSaidaPedidoVenda = z.infer<
	typeof import("./schemas").vd_saida_pedido_vendaSchema
>;
export type VdSaidaPedidoVendaRelations = Record<string, never>;

export type VdSaidaPedidoVendaRelationKey = keyof VdSaidaPedidoVendaRelations;
