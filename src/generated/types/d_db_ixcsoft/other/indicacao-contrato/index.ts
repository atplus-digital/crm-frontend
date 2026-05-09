/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IndicacaoContrato = z.infer<
	typeof import("./schemas").indicacao_contratoSchema
>;
export type IndicacaoContratoRelations = Record<string, never>;

export type IndicacaoContratoRelationKey = keyof IndicacaoContratoRelations;
