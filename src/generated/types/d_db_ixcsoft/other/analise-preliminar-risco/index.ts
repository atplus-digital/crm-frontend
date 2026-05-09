/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AnalisePreliminarRisco = z.infer<
	typeof import("./schemas").analise_preliminar_riscoSchema
>;
export type AnalisePreliminarRiscoRelations = Record<string, never>;

export type AnalisePreliminarRiscoRelationKey =
	keyof AnalisePreliminarRiscoRelations;
