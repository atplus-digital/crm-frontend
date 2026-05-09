/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VdSaidaRpsModeloImpressao = z.infer<
	typeof import("./schemas").vd_saida_rps_modelo_impressaoSchema
>;
export type VdSaidaRpsModeloImpressaoRelations = Record<string, never>;

export type VdSaidaRpsModeloImpressaoRelationKey =
	keyof VdSaidaRpsModeloImpressaoRelations;
