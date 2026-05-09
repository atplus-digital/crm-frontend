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
export type UsuariosMenuFavoritos = z.infer<
	typeof import("./schemas").usuarios_menu_favoritosSchema
>;
export type UsuariosMenuFavoritosRelations = Record<string, never>;

export type UsuariosMenuFavoritosRelationKey =
	keyof UsuariosMenuFavoritosRelations;
