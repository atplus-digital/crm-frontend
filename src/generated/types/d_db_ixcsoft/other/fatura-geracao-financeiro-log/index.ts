/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FaturaGeracaoFinanceiroLog = z.infer<
	typeof import("./schemas").fatura_geracao_financeiro_logSchema
>;
export type FaturaGeracaoFinanceiroLogRelations = Record<string, never>;

export type FaturaGeracaoFinanceiroLogRelationKey =
	keyof FaturaGeracaoFinanceiroLogRelations;
