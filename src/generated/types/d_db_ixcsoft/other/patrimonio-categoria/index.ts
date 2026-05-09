/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PatrimonioCategoria = z.infer<
	typeof import("./schemas").patrimonio_categoriaSchema
>;
export type PatrimonioCategoriaRelations = Record<string, never>;

export type PatrimonioCategoriaRelationKey = keyof PatrimonioCategoriaRelations;
