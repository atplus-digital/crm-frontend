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
export type PlanejamentoAnalitico = z.infer<
	typeof import("./schemas").planejamento_analiticoSchema
>;
export type PlanejamentoAnaliticoRelations = Record<string, never>;

export type PlanejamentoAnaliticoRelationKey =
	keyof PlanejamentoAnaliticoRelations;
