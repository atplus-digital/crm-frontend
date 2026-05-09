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
export type AnalisePreliminarRiscoPerguntas = z.infer<
	typeof import("./schemas").analise_preliminar_risco_perguntasSchema
>;
export type AnalisePreliminarRiscoPerguntasRelations = Record<string, never>;

export type AnalisePreliminarRiscoPerguntasRelationKey =
	keyof AnalisePreliminarRiscoPerguntasRelations;
