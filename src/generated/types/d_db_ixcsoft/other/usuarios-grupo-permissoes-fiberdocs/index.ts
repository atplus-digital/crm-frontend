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
export type UsuariosGrupoPermissoesFiberdocs = z.infer<
	typeof import("./schemas").usuarios_grupo_permissoes_fiberdocsSchema
>;
export type UsuariosGrupoPermissoesFiberdocsRelations = Record<string, never>;

export type UsuariosGrupoPermissoesFiberdocsRelationKey =
	keyof UsuariosGrupoPermissoesFiberdocsRelations;
