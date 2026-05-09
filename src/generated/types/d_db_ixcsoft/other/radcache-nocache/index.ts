/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadcacheNocache = z.infer<
	typeof import("./schemas").radcache_nocacheSchema
>;
export type RadcacheNocacheRelations = Record<string, never>;

export type RadcacheNocacheRelationKey = keyof RadcacheNocacheRelations;
