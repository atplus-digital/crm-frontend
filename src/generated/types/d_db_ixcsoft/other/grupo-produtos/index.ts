/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type GrupoProdutos = z.infer<
	typeof import("./schemas").grupo_produtosSchema
>;
export type GrupoProdutosRelations = Record<string, never>;

export type GrupoProdutosRelationKey = keyof GrupoProdutosRelations;
