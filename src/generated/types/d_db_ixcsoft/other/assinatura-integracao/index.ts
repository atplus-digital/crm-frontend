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
export type AssinaturaIntegracao = z.infer<
	typeof import("./schemas").assinatura_integracaoSchema
>;
export type AssinaturaIntegracaoRelations = Record<string, never>;

export type AssinaturaIntegracaoRelationKey =
	keyof AssinaturaIntegracaoRelations;
