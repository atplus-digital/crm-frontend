/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosAnexos = z.infer<
	typeof import("./schemas").produtos_anexosSchema
>;
export type ProdutosAnexosRelations = Record<string, never>;

export type ProdutosAnexosRelationKey = keyof ProdutosAnexosRelations;
