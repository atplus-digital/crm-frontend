/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteIntegracaoExternalId = z.infer<
	typeof import("./schemas").cliente_integracao_external_idSchema
>;
export type ClienteIntegracaoExternalIdRelations = Record<string, never>;

export type ClienteIntegracaoExternalIdRelationKey =
	keyof ClienteIntegracaoExternalIdRelations;
