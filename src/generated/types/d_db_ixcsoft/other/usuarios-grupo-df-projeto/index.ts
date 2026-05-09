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
export type UsuariosGrupoDfProjeto = z.infer<
	typeof import("./schemas").usuarios_grupo_df_projetoSchema
>;
export type UsuariosGrupoDfProjetoRelations = Record<string, never>;

export type UsuariosGrupoDfProjetoRelationKey =
	keyof UsuariosGrupoDfProjetoRelations;
