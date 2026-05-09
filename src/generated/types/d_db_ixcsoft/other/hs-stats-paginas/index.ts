/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsStatsPaginas = z.infer<
	typeof import("./schemas").hs_stats_paginasSchema
>;
export type HsStatsPaginasRelations = Record<string, never>;

export type HsStatsPaginasRelationKey = keyof HsStatsPaginasRelations;
