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
export type RedeNeutraOperador = z.infer<
	typeof import("./schemas").rede_neutra_operadorSchema
>;
export type RedeNeutraOperadorRelations = Record<string, never>;

export type RedeNeutraOperadorRelationKey = keyof RedeNeutraOperadorRelations;
