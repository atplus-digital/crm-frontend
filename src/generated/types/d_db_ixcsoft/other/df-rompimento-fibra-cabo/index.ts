/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfRompimentoFibraCabo = z.infer<
	typeof import("./schemas").df_rompimento_fibra_caboSchema
>;
export type DfRompimentoFibraCaboRelations = Record<string, never>;

export type DfRompimentoFibraCaboRelationKey =
	keyof DfRompimentoFibraCaboRelations;
