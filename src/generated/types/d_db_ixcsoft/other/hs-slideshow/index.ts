/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsSlideshow = z.infer<
	typeof import("./schemas").hs_slideshowSchema
>;
export type HsSlideshowRelations = Record<string, never>;

export type HsSlideshowRelationKey = keyof HsSlideshowRelations;
