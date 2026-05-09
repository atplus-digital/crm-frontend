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
export type ContratoModeloRelTermo = z.infer<
	typeof import("./schemas").contrato_modelo_rel_termoSchema
>;
export type ContratoModeloRelTermoRelations = Record<string, never>;

export type ContratoModeloRelTermoRelationKey =
	keyof ContratoModeloRelTermoRelations;
