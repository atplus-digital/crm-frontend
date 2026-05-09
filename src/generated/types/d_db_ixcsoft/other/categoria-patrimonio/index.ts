/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CategoriaPatrimonio = z.infer<
	typeof import("./schemas").categoria_patrimonioSchema
>;
export type CategoriaPatrimonioRelations = Record<string, never>;

export type CategoriaPatrimonioRelationKey = keyof CategoriaPatrimonioRelations;
