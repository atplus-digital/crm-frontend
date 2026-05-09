/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AnalisePreliminarRiscoRespostas = z.infer<
	typeof import("./schemas").analise_preliminar_risco_respostasSchema
>;
export type AnalisePreliminarRiscoRespostasRelations = Record<string, never>;

export type AnalisePreliminarRiscoRespostasRelationKey =
	keyof AnalisePreliminarRiscoRespostasRelations;
