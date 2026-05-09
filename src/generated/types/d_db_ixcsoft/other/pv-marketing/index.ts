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
export type PvMarketing = z.infer<
	typeof import("./schemas").pv_marketingSchema
>;
export type PvMarketingRelations = Record<string, never>;

export type PvMarketingRelationKey = keyof PvMarketingRelations;
