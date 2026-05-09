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
export type IntegracaoSerasa = z.infer<
	typeof import("./schemas").integracao_serasaSchema
>;
export type IntegracaoSerasaRelations = Record<string, never>;

export type IntegracaoSerasaRelationKey = keyof IntegracaoSerasaRelations;
