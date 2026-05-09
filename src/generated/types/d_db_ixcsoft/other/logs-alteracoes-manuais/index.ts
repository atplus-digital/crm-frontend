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
export type LogsAlteracoesManuais = z.infer<
	typeof import("./schemas").logs_alteracoes_manuaisSchema
>;
export type LogsAlteracoesManuaisRelations = Record<string, never>;

export type LogsAlteracoesManuaisRelationKey =
	keyof LogsAlteracoesManuaisRelations;
