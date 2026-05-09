/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Carregamento = z.infer<
	typeof import("./schemas").carregamentoSchema
>;
export type CarregamentoRelations = Record<string, never>;

export type CarregamentoRelationKey = keyof CarregamentoRelations;
