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
export type ModulosSfp = z.infer<typeof import("./schemas").modulos_sfpSchema>;
export type ModulosSfpRelations = z.infer<
	typeof import("./schemas").modulos_sfpRelationSchema
>;

export type ModulosSfpRelationKey = keyof ModulosSfpRelations;
