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
export type CrmProspeccaoPropostasTipos = z.infer<
	typeof import("./schemas").crm_prospeccao_propostas_tiposSchema
>;
export type CrmProspeccaoPropostasTiposRelations = Record<string, never>;

export type CrmProspeccaoPropostasTiposRelationKey =
	keyof CrmProspeccaoPropostasTiposRelations;
