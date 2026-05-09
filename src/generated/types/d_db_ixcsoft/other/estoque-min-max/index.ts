/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type EstoqueMinMax = z.infer<
	typeof import("./schemas").estoque_min_maxSchema
>;
export type EstoqueMinMaxRelations = Record<string, never>;

export type EstoqueMinMaxRelationKey = keyof EstoqueMinMaxRelations;
