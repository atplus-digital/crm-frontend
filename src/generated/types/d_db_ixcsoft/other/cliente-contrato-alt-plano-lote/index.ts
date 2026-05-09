/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteContratoAltPlanoLote = z.infer<
	typeof import("./schemas").cliente_contrato_alt_plano_loteSchema
>;
export type ClienteContratoAltPlanoLoteRelations = Record<string, never>;

export type ClienteContratoAltPlanoLoteRelationKey =
	keyof ClienteContratoAltPlanoLoteRelations;
