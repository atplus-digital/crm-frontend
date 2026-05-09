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
export type Radcache = z.infer<typeof import("./schemas").radcacheSchema>;
export type RadcacheRelations = Record<string, never>;

export type RadcacheRelationKey = keyof RadcacheRelations;
