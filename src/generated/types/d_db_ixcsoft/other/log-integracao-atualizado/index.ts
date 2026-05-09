/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogIntegracaoAtualizado = z.infer<
	typeof import("./schemas").log_integracao_atualizadoSchema
>;
export type LogIntegracaoAtualizadoRelations = Record<string, never>;

export type LogIntegracaoAtualizadoRelationKey =
	keyof LogIntegracaoAtualizadoRelations;
