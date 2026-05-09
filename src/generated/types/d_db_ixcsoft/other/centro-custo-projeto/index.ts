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
export type CentroCustoProjeto = z.infer<
	typeof import("./schemas").centro_custo_projetoSchema
>;
export type CentroCustoProjetoRelations = Record<string, never>;

export type CentroCustoProjetoRelationKey = keyof CentroCustoProjetoRelations;
