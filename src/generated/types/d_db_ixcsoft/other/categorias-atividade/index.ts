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
export type CategoriasAtividade = z.infer<
	typeof import("./schemas").categorias_atividadeSchema
>;
export type CategoriasAtividadeRelations = Record<string, never>;

export type CategoriasAtividadeRelationKey = keyof CategoriasAtividadeRelations;
