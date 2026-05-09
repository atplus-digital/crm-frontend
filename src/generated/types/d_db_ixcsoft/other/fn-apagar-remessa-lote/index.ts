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
export type FnApagarRemessaLote = z.infer<
	typeof import("./schemas").fn_apagar_remessa_loteSchema
>;
export type FnApagarRemessaLoteRelations = Record<string, never>;

export type FnApagarRemessaLoteRelationKey = keyof FnApagarRemessaLoteRelations;
