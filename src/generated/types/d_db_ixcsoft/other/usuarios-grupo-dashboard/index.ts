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
export type UsuariosGrupoDashboard = z.infer<
	typeof import("./schemas").usuarios_grupo_dashboardSchema
>;
export type UsuariosGrupoDashboardRelations = Record<string, never>;

export type UsuariosGrupoDashboardRelationKey =
	keyof UsuariosGrupoDashboardRelations;
