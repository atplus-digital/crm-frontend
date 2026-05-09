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
export type CrmCobrancaHistorico = z.infer<
	typeof import("./schemas").crm_cobranca_historicoSchema
>;
export type CrmCobrancaHistoricoRelations = Record<string, never>;

export type CrmCobrancaHistoricoRelationKey =
	keyof CrmCobrancaHistoricoRelations;
