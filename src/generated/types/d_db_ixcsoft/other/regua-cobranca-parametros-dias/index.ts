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
export type ReguaCobrancaParametrosDias = z.infer<
	typeof import("./schemas").regua_cobranca_parametros_diasSchema
>;
export type ReguaCobrancaParametrosDiasRelations = Record<string, never>;

export type ReguaCobrancaParametrosDiasRelationKey =
	keyof ReguaCobrancaParametrosDiasRelations;
