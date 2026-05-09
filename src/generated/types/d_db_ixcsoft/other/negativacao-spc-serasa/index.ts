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
export type NegativacaoSpcSerasa = z.infer<
	typeof import("./schemas").negativacao_spc_serasaSchema
>;
export type NegativacaoSpcSerasaRelations = Record<string, never>;

export type NegativacaoSpcSerasaRelationKey =
	keyof NegativacaoSpcSerasaRelations;
