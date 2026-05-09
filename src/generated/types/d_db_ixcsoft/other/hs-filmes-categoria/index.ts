/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsFilmesCategoria = z.infer<
	typeof import("./schemas").hs_filmes_categoriaSchema
>;
export type HsFilmesCategoriaRelations = Record<string, never>;

export type HsFilmesCategoriaRelationKey = keyof HsFilmesCategoriaRelations;
