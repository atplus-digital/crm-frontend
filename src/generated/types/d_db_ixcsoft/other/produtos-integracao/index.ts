/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosIntegracao = z.infer<
	typeof import("./schemas").produtos_integracaoSchema
>;
export type ProdutosIntegracaoRelations = Record<string, never>;

export type ProdutosIntegracaoRelationKey = keyof ProdutosIntegracaoRelations;
