/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CentroResultadoRelCentroCustoCriterioRateio = z.infer<
	typeof import("./schemas").centro_resultado_rel_centro_custo_criterio_rateioSchema
>;
export type CentroResultadoRelCentroCustoCriterioRateioRelations = Record<
	string,
	never
>;

export type CentroResultadoRelCentroCustoCriterioRateioRelationKey =
	keyof CentroResultadoRelCentroCustoCriterioRateioRelations;
