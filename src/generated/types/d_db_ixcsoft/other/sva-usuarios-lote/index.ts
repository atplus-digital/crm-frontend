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
export type SvaUsuariosLote = z.infer<
	typeof import("./schemas").sva_usuarios_loteSchema
>;
export type SvaUsuariosLoteRelations = Record<string, never>;

export type SvaUsuariosLoteRelationKey = keyof SvaUsuariosLoteRelations;
