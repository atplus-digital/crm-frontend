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
export type WflParametroOss = z.infer<
	typeof import("./schemas").wfl_parametro_ossSchema
>;
export type WflParametroOssRelations = Record<string, never>;

export type WflParametroOssRelationKey = keyof WflParametroOssRelations;
