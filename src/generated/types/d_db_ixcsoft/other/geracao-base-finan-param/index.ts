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
export type GeracaoBaseFinanParam = z.infer<
	typeof import("./schemas").geracao_base_finan_paramSchema
>;
export type GeracaoBaseFinanParamRelations = Record<string, never>;

export type GeracaoBaseFinanParamRelationKey =
	keyof GeracaoBaseFinanParamRelations;
