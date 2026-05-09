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
export type CentroCustoCriterioRateio = z.infer<
	typeof import("./schemas").centro_custo_criterio_rateioSchema
>;
export type CentroCustoCriterioRateioRelations = Record<string, never>;

export type CentroCustoCriterioRateioRelationKey =
	keyof CentroCustoCriterioRateioRelations;
