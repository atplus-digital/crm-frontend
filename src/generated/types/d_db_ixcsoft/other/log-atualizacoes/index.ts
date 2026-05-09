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
export type LogAtualizacoes = z.infer<
	typeof import("./schemas").log_atualizacoesSchema
>;
export type LogAtualizacoesRelations = Record<string, never>;

export type LogAtualizacoesRelationKey = keyof LogAtualizacoesRelations;
