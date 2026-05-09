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
export type FnApagarLote = z.infer<
	typeof import("./schemas").fn_apagar_loteSchema
>;
export type FnApagarLoteRelations = Record<string, never>;

export type FnApagarLoteRelationKey = keyof FnApagarLoteRelations;
