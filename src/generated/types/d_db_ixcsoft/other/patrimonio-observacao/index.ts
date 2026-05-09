/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PatrimonioObservacao = z.infer<
	typeof import("./schemas").patrimonio_observacaoSchema
>;
export type PatrimonioObservacaoRelations = Record<string, never>;

export type PatrimonioObservacaoRelationKey =
	keyof PatrimonioObservacaoRelations;
