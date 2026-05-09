/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmAnotacaoPadrao = z.infer<
	typeof import("./schemas").crm_anotacao_padraoSchema
>;
export type CrmAnotacaoPadraoRelations = Record<string, never>;

export type CrmAnotacaoPadraoRelationKey = keyof CrmAnotacaoPadraoRelations;
