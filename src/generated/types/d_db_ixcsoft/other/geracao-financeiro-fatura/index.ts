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
export type GeracaoFinanceiroFatura = z.infer<
	typeof import("./schemas").geracao_financeiro_faturaSchema
>;
export type GeracaoFinanceiroFaturaRelations = Record<string, never>;

export type GeracaoFinanceiroFaturaRelationKey =
	keyof GeracaoFinanceiroFaturaRelations;
