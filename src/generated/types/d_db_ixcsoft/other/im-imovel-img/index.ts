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
export type ImImovelImg = z.infer<
	typeof import("./schemas").im_imovel_imgSchema
>;
export type ImImovelImgRelations = Record<string, never>;

export type ImImovelImgRelationKey = keyof ImImovelImgRelations;
