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
export type Sites = z.infer<typeof import("./schemas").sitesSchema>;
export type SitesRelations = z.infer<
	typeof import("./schemas").sitesRelationSchema
>;

export type SitesRelationKey = keyof SitesRelations;
