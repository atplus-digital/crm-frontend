/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmPlanosNegociacoesRegioesViaveis = z.infer<
	typeof import("./schemas").crm_planos_negociacoes_regioes_viaveisSchema
>;
export type CrmPlanosNegociacoesRegioesViaveisRelations = Record<string, never>;

export type CrmPlanosNegociacoesRegioesViaveisRelationKey =
	keyof CrmPlanosNegociacoesRegioesViaveisRelations;
