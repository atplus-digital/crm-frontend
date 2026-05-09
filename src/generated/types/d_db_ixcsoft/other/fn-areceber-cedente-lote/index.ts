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
export type FnAreceberCedenteLote = z.infer<
	typeof import("./schemas").fn_areceber_cedente_loteSchema
>;
export type FnAreceberCedenteLoteRelations = Record<string, never>;

export type FnAreceberCedenteLoteRelationKey =
	keyof FnAreceberCedenteLoteRelations;
