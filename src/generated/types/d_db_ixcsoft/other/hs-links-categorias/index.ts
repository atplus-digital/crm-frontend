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
export type HsLinksCategorias = z.infer<
	typeof import("./schemas").hs_links_categoriasSchema
>;
export type HsLinksCategoriasRelations = Record<string, never>;

export type HsLinksCategoriasRelationKey = keyof HsLinksCategoriasRelations;
