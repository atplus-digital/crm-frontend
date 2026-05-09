/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosComposicao = z.infer<
	typeof import("./schemas").produtos_composicaoSchema
>;
export type ProdutosComposicaoRelations = Record<string, never>;

export type ProdutosComposicaoRelationKey = keyof ProdutosComposicaoRelations;
