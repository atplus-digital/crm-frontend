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
export type HsBanner = z.infer<typeof import("./schemas").hs_bannerSchema>;
export type HsBannerRelations = Record<string, never>;

export type HsBannerRelationKey = keyof HsBannerRelations;
