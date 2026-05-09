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
export type FnApagarRetornoLote = z.infer<
	typeof import("./schemas").fn_apagar_retorno_loteSchema
>;
export type FnApagarRetornoLoteRelations = Record<string, never>;

export type FnApagarRetornoLoteRelationKey = keyof FnApagarRetornoLoteRelations;
