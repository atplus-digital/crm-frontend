/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PedidoCompraArquivos = z.infer<
	typeof import("./schemas").pedido_compra_arquivosSchema
>;
export type PedidoCompraArquivosRelations = Record<string, never>;

export type PedidoCompraArquivosRelationKey =
	keyof PedidoCompraArquivosRelations;
