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
export type CrmModeloProposta = z.infer<
	typeof import("./schemas").crm_modelo_propostaSchema
>;
export type CrmModeloPropostaRelations = Record<string, never>;

export type CrmModeloPropostaRelationKey = keyof CrmModeloPropostaRelations;
