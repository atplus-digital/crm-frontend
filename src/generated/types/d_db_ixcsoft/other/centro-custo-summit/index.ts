/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CentroCustoSummit = z.infer<
	typeof import("./schemas").centro_custo_summitSchema
>;
export type CentroCustoSummitRelations = Record<string, never>;

export type CentroCustoSummitRelationKey = keyof CentroCustoSummitRelations;
