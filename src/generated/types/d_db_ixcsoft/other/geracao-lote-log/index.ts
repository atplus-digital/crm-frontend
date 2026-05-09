/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type GeracaoLoteLog = z.infer<
	typeof import("./schemas").geracao_lote_logSchema
>;
export type GeracaoLoteLogRelations = Record<string, never>;

export type GeracaoLoteLogRelationKey = keyof GeracaoLoteLogRelations;
