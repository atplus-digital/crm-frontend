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
export type FnAreceberHistBoleto = z.infer<
	typeof import("./schemas").fn_areceber_hist_boletoSchema
>;
export type FnAreceberHistBoletoRelations = Record<string, never>;

export type FnAreceberHistBoletoRelationKey =
	keyof FnAreceberHistBoletoRelations;
