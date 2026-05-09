/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AgeNegociacoesSaidas = z.infer<
	typeof import("./schemas").age_negociacoes_saidasSchema
>;
export type AgeNegociacoesSaidasRelations = Record<string, never>;

export type AgeNegociacoesSaidasRelationKey =
	keyof AgeNegociacoesSaidasRelations;
