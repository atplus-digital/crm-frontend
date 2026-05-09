/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type MpElementoCoordenada = z.infer<
	typeof import("./schemas").mp_elemento_coordenadaSchema
>;
export type MpElementoCoordenadaRelations = Record<string, never>;

export type MpElementoCoordenadaRelationKey =
	keyof MpElementoCoordenadaRelations;
