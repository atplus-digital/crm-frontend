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
export type AssinaturaPlanoProdutoSubproduto = z.infer<
	typeof import("./schemas").assinatura_plano_produto_subprodutoSchema
>;
export type AssinaturaPlanoProdutoSubprodutoRelations = Record<string, never>;

export type AssinaturaPlanoProdutoSubprodutoRelationKey =
	keyof AssinaturaPlanoProdutoSubprodutoRelations;
