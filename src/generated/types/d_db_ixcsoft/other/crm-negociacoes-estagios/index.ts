/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmNegociacoesEstagios = z.infer<
	typeof import("./schemas").crm_negociacoes_estagiosSchema
>;
export type CrmNegociacoesEstagiosRelations = Record<string, never>;

export type CrmNegociacoesEstagiosRelationKey =
	keyof CrmNegociacoesEstagiosRelations;
