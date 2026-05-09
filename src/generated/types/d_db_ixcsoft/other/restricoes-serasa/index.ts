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
export type RestricoesSerasa = z.infer<
	typeof import("./schemas").restricoes_serasaSchema
>;
export type RestricoesSerasaRelations = Record<string, never>;

export type RestricoesSerasaRelationKey = keyof RestricoesSerasaRelations;
