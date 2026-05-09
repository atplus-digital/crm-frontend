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
export type MovimentacaoProdutosInativacao = z.infer<
	typeof import("./schemas").movimentacao_produtos_inativacaoSchema
>;
export type MovimentacaoProdutosInativacaoRelations = Record<string, never>;

export type MovimentacaoProdutosInativacaoRelationKey =
	keyof MovimentacaoProdutosInativacaoRelations;
