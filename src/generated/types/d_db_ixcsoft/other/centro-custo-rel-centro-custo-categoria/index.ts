/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CentroCustoRelCentroCustoCategoria = z.infer<
	typeof import("./schemas").centro_custo_rel_centro_custo_categoriaSchema
>;
export type CentroCustoRelCentroCustoCategoriaRelations = Record<string, never>;

export type CentroCustoRelCentroCustoCategoriaRelationKey =
	keyof CentroCustoRelCentroCustoCategoriaRelations;
