/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CentroCustoRelVeiculos = z.infer<
	typeof import("./schemas").centro_custo_rel_veiculosSchema
>;
export type CentroCustoRelVeiculosRelations = Record<string, never>;

export type CentroCustoRelVeiculosRelationKey =
	keyof CentroCustoRelVeiculosRelations;
