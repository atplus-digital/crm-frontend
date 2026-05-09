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
export type AssinaturaClienteProduto = z.infer<
	typeof import("./schemas").assinatura_cliente_produtoSchema
>;
export type AssinaturaClienteProdutoRelations = Record<string, never>;

export type AssinaturaClienteProdutoRelationKey =
	keyof AssinaturaClienteProdutoRelations;
