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
export type PeriodosFerias = z.infer<
	typeof import("./schemas").periodos_feriasSchema
>;
export type PeriodosFeriasRelations = z.infer<
	typeof import("./schemas").periodos_feriasRelationSchema
>;

export type PeriodosFeriasRelationKey = keyof PeriodosFeriasRelations;
