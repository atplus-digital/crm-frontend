/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IntegracoesCgnat = z.infer<
	typeof import("./schemas").integracoes_cgnatSchema
>;
export type IntegracoesCgnatRelations = Record<string, never>;

export type IntegracoesCgnatRelationKey = keyof IntegracoesCgnatRelations;
