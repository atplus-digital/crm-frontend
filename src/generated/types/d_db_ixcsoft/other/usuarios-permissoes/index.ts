/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type UsuariosPermissoes = z.infer<
	typeof import("./schemas").usuarios_permissoesSchema
>;
export type UsuariosPermissoesRelations = Record<string, never>;

export type UsuariosPermissoesRelationKey = keyof UsuariosPermissoesRelations;
