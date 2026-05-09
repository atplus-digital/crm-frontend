/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteChaveN = z.infer<
	typeof import("./schemas").cliente_chavenSchema
>;
export type ClienteChaveNRelations = Record<string, never>;

export type ClienteChaveNRelationKey = keyof ClienteChaveNRelations;
