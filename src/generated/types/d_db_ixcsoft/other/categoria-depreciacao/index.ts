/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CategoriaDepreciacao = z.infer<
	typeof import("./schemas").categoria_depreciacaoSchema
>;
export type CategoriaDepreciacaoRelations = Record<string, never>;

export type CategoriaDepreciacaoRelationKey =
	keyof CategoriaDepreciacaoRelations;
