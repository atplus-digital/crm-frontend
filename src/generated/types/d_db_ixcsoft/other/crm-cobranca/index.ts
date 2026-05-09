/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmCobranca = z.infer<
	typeof import("./schemas").crm_cobrancaSchema
>;
export type CrmCobrancaRelations = z.infer<
	typeof import("./schemas").crm_cobrancaRelationSchema
>;

export type CrmCobrancaRelationKey = keyof CrmCobrancaRelations;
