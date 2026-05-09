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
export type GeracaoVinculoConvenioNfContrato = z.infer<
	typeof import("./schemas").geracao_vinculo_convenio_nf_contratoSchema
>;
export type GeracaoVinculoConvenioNfContratoRelations = Record<string, never>;

export type GeracaoVinculoConvenioNfContratoRelationKey =
	keyof GeracaoVinculoConvenioNfContratoRelations;
