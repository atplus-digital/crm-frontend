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
export type HsBannerCategorias = z.infer<
	typeof import("./schemas").hs_banner_categoriasSchema
>;
export type HsBannerCategoriasRelations = Record<string, never>;

export type HsBannerCategoriasRelationKey = keyof HsBannerCategoriasRelations;
