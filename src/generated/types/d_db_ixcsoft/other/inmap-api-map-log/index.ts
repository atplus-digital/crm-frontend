/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type InmapApiMapLog = z.infer<
	typeof import("./schemas").inmap_api_map_logSchema
>;
export type InmapApiMapLogRelations = Record<string, never>;

export type InmapApiMapLogRelationKey = keyof InmapApiMapLogRelations;
