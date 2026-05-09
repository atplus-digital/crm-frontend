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
export type MovimentoProdutos = z.infer<
	typeof import("./schemas").movimento_produtosSchema
>;
export type MovimentoProdutosRelations = Record<string, never>;

export type MovimentoProdutosRelationKey = keyof MovimentoProdutosRelations;
