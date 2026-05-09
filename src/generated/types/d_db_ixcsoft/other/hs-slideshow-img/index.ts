/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsSlideshowImg = z.infer<
	typeof import("./schemas").hs_slideshow_imgSchema
>;
export type HsSlideshowImgRelations = Record<string, never>;

export type HsSlideshowImgRelationKey = keyof HsSlideshowImgRelations;
