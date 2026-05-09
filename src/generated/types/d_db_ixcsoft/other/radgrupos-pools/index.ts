/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadgruposPools = z.infer<
	typeof import("./schemas").radgrupos_poolsSchema
>;
export type RadgruposPoolsRelations = Record<string, never>;

export type RadgruposPoolsRelationKey = keyof RadgruposPoolsRelations;
