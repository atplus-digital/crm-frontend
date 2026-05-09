/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmProspeccaoAnotacoes = z.infer<
	typeof import("./schemas").crm_prospeccao_anotacoesSchema
>;
export type CrmProspeccaoAnotacoesRelations = Record<string, never>;

export type CrmProspeccaoAnotacoesRelationKey =
	keyof CrmProspeccaoAnotacoesRelations;
