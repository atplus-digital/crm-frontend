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
export type GeracaoLoteAgrupFinan = z.infer<
	typeof import("./schemas").geracao_lote_agrup_finanSchema
>;
export type GeracaoLoteAgrupFinanRelations = Record<string, never>;

export type GeracaoLoteAgrupFinanRelationKey =
	keyof GeracaoLoteAgrupFinanRelations;
