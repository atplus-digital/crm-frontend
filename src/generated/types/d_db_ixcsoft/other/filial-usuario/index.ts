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
export type FilialUsuario = z.infer<
	typeof import("./schemas").filial_usuarioSchema
>;
export type FilialUsuarioRelations = Record<string, never>;

export type FilialUsuarioRelationKey = keyof FilialUsuarioRelations;
