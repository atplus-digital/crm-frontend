/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PppAnatelFiltros = z.infer<
	typeof import("./schemas").ppp_anatel_filtrosSchema
>;
export type PppAnatelFiltrosRelations = Record<string, never>;

export type PppAnatelFiltrosRelationKey = keyof PppAnatelFiltrosRelations;
