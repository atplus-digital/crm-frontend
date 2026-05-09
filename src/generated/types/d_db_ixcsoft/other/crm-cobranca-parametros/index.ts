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
export type CrmCobrancaParametros = z.infer<
	typeof import("./schemas").crm_cobranca_parametrosSchema
>;
export type CrmCobrancaParametrosRelations = Record<string, never>;

export type CrmCobrancaParametrosRelationKey =
	keyof CrmCobrancaParametrosRelations;
