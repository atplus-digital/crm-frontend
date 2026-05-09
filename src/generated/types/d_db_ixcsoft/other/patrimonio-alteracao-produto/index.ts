/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PatrimonioAlteracaoProduto = z.infer<
	typeof import("./schemas").patrimonio_alteracao_produtoSchema
>;
export type PatrimonioAlteracaoProdutoRelations = Record<string, never>;

export type PatrimonioAlteracaoProdutoRelationKey =
	keyof PatrimonioAlteracaoProdutoRelations;
