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
export type ProdutosImg = z.infer<
	typeof import("./schemas").produtos_imgSchema
>;
export type ProdutosImgRelations = Record<string, never>;

export type ProdutosImgRelationKey = keyof ProdutosImgRelations;
