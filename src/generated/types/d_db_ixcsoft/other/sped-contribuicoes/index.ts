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
export type SpedContribuicoes = z.infer<
	typeof import("./schemas").sped_contribuicoesSchema
>;
export type SpedContribuicoesRelations = Record<string, never>;

export type SpedContribuicoesRelationKey = keyof SpedContribuicoesRelations;
