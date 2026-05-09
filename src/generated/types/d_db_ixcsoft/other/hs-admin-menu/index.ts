/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsAdminMenu = z.infer<
	typeof import("./schemas").hs_admin_menuSchema
>;
export type HsAdminMenuRelations = Record<string, never>;

export type HsAdminMenuRelationKey = keyof HsAdminMenuRelations;
