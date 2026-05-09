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
export type AssinaturaClienteProdutoSubproduto = z.infer<
	typeof import("./schemas").assinatura_cliente_produto_subprodutoSchema
>;
export type AssinaturaClienteProdutoSubprodutoRelations = Record<string, never>;

export type AssinaturaClienteProdutoSubprodutoRelationKey =
	keyof AssinaturaClienteProdutoSubprodutoRelations;
