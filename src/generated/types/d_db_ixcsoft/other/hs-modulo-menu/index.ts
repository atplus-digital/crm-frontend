/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsModuloMenu = z.infer<
	typeof import("./schemas").hs_modulo_menuSchema
>;
export type HsModuloMenuRelations = Record<string, never>;

export type HsModuloMenuRelationKey = keyof HsModuloMenuRelations;
