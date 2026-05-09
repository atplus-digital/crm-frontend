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
export type HsAdmCategorias = z.infer<
	typeof import("./schemas").hs_adm_categoriasSchema
>;
export type HsAdmCategoriasRelations = Record<string, never>;

export type HsAdmCategoriasRelationKey = keyof HsAdmCategoriasRelations;
