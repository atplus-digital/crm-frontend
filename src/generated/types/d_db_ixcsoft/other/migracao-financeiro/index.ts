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
export type MigracaoFinanceiro = z.infer<
	typeof import("./schemas").migracao_financeiroSchema
>;
export type MigracaoFinanceiroRelations = Record<string, never>;

export type MigracaoFinanceiroRelationKey = keyof MigracaoFinanceiroRelations;
