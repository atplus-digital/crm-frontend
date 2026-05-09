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
export type CentroCustoCategoria = z.infer<
	typeof import("./schemas").centro_custo_categoriaSchema
>;
export type CentroCustoCategoriaRelations = Record<string, never>;

export type CentroCustoCategoriaRelationKey =
	keyof CentroCustoCategoriaRelations;
