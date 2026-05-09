/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TabelaPrecosProdutos = z.infer<
	typeof import("./schemas").tabela_precos_produtosSchema
>;
export type TabelaPrecosProdutosRelations = Record<string, never>;

export type TabelaPrecosProdutosRelationKey =
	keyof TabelaPrecosProdutosRelations;
