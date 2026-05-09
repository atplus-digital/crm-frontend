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
export type PlanejamentoFinan = z.infer<
	typeof import("./schemas").planejamento_finanSchema
>;
export type PlanejamentoFinanRelations = Record<string, never>;

export type PlanejamentoFinanRelationKey = keyof PlanejamentoFinanRelations;
