/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CategoriaSummit = z.infer<
	typeof import("./schemas").categoria_summitSchema
>;
export type CategoriaSummitRelations = Record<string, never>;

export type CategoriaSummitRelationKey = keyof CategoriaSummitRelations;
