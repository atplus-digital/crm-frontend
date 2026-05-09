/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PatrimonioCategoriaDepreciacao = z.infer<
	typeof import("./schemas").patrimonio_categoria_depreciacaoSchema
>;
export type PatrimonioCategoriaDepreciacaoRelations = Record<string, never>;

export type PatrimonioCategoriaDepreciacaoRelationKey =
	keyof PatrimonioCategoriaDepreciacaoRelations;
