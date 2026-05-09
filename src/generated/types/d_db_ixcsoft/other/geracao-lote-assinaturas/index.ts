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
export type GeracaoLoteAssinaturas = z.infer<
	typeof import("./schemas").geracao_lote_assinaturasSchema
>;
export type GeracaoLoteAssinaturasRelations = Record<string, never>;

export type GeracaoLoteAssinaturasRelationKey =
	keyof GeracaoLoteAssinaturasRelations;
