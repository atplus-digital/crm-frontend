/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CentroResultadoRateio = z.infer<
	typeof import("./schemas").centro_resultado_rateioSchema
>;
export type CentroResultadoRateioRelations = Record<string, never>;

export type CentroResultadoRateioRelationKey =
	keyof CentroResultadoRateioRelations;
