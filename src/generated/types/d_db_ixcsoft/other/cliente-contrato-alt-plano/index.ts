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
export type ClienteContratoAltPlano = z.infer<
	typeof import("./schemas").cliente_contrato_alt_planoSchema
>;
export type ClienteContratoAltPlanoRelations = Record<string, never>;

export type ClienteContratoAltPlanoRelationKey =
	keyof ClienteContratoAltPlanoRelations;
