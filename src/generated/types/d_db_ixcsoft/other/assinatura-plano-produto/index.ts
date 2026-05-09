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
export type AssinaturaPlanoProduto = z.infer<
	typeof import("./schemas").assinatura_plano_produtoSchema
>;
export type AssinaturaPlanoProdutoRelations = Record<string, never>;

export type AssinaturaPlanoProdutoRelationKey =
	keyof AssinaturaPlanoProdutoRelations;
