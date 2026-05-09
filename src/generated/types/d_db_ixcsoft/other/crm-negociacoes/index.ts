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
export type CrmNegociacoes = z.infer<
	typeof import("./schemas").crm_negociacoesSchema
>;
export type CrmNegociacoesRelations = Record<string, never>;

export type CrmNegociacoesRelationKey = keyof CrmNegociacoesRelations;
