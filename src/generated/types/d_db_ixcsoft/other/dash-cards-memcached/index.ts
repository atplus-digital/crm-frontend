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
export type DashCardsMemcached = z.infer<
	typeof import("./schemas").dash_cards_memcachedSchema
>;
export type DashCardsMemcachedRelations = Record<string, never>;

export type DashCardsMemcachedRelationKey = keyof DashCardsMemcachedRelations;
