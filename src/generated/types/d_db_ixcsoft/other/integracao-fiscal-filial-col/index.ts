/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IntegracaoFiscalFilialCol = z.infer<
	typeof import("./schemas").integracao_fiscal_filial_colSchema
>;
export type IntegracaoFiscalFilialColRelations = Record<string, never>;

export type IntegracaoFiscalFilialColRelationKey =
	keyof IntegracaoFiscalFilialColRelations;
