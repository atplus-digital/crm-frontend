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
export type LogsIntegracoes = z.infer<
	typeof import("./schemas").logs_integracoesSchema
>;
export type LogsIntegracoesRelations = Record<string, never>;

export type LogsIntegracoesRelationKey = keyof LogsIntegracoesRelations;
