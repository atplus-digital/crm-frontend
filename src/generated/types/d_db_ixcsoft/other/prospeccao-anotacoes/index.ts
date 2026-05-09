/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProspeccaoAnotacoes = z.infer<
	typeof import("./schemas").prospeccao_anotacoesSchema
>;
export type ProspeccaoAnotacoesRelations = Record<string, never>;

export type ProspeccaoAnotacoesRelationKey = keyof ProspeccaoAnotacoesRelations;
