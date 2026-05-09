/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type InmapAnalytics = z.infer<
	typeof import("./schemas").inmap_analyticsSchema
>;
export type InmapAnalyticsRelations = Record<string, never>;

export type InmapAnalyticsRelationKey = keyof InmapAnalyticsRelations;
