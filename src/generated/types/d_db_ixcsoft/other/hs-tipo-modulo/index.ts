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
export type HsTipoModulo = z.infer<
	typeof import("./schemas").hs_tipo_moduloSchema
>;
export type HsTipoModuloRelations = Record<string, never>;

export type HsTipoModuloRelationKey = keyof HsTipoModuloRelations;
