/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfElementoCoordenada = z.infer<
	typeof import("./schemas").df_elemento_coordenadaSchema
>;
export type DfElementoCoordenadaRelations = Record<string, never>;

export type DfElementoCoordenadaRelationKey =
	keyof DfElementoCoordenadaRelations;
