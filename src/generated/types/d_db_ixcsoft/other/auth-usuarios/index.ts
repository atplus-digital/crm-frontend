/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AuthUsuarios = z.infer<
	typeof import("./schemas").auth_usuariosSchema
>;
export type AuthUsuariosRelations = Record<string, never>;

export type AuthUsuariosRelationKey = keyof AuthUsuariosRelations;
