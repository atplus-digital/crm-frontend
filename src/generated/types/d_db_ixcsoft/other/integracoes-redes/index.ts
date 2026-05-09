/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IntegracoesRedes = z.infer<
	typeof import("./schemas").integracoes_redesSchema
>;
export type IntegracoesRedesRelations = Record<string, never>;

export type IntegracoesRedesRelationKey = keyof IntegracoesRedesRelations;
