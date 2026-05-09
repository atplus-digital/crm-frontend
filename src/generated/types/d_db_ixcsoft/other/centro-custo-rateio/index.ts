/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CentroCustoRateio = z.infer<
	typeof import("./schemas").centro_custo_rateioSchema
>;
export type CentroCustoRateioRelations = Record<string, never>;

export type CentroCustoRateioRelationKey = keyof CentroCustoRateioRelations;
