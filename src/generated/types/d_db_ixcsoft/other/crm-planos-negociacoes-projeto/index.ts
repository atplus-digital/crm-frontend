/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmPlanosNegociacoesProjeto = z.infer<
	typeof import("./schemas").crm_planos_negociacoes_projetoSchema
>;
export type CrmPlanosNegociacoesProjetoRelations = Record<string, never>;

export type CrmPlanosNegociacoesProjetoRelationKey =
	keyof CrmPlanosNegociacoesProjetoRelations;
