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
export type AssinaturaClienteProdutoSubprodutoTmp = z.infer<
	typeof import("./schemas").assinatura_cliente_produto_subproduto_tmpSchema
>;
export type AssinaturaClienteProdutoSubprodutoTmpRelations = Record<
	string,
	never
>;

export type AssinaturaClienteProdutoSubprodutoTmpRelationKey =
	keyof AssinaturaClienteProdutoSubprodutoTmpRelations;
