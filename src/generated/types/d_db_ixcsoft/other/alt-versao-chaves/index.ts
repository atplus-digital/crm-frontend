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
export type AltVersaoChaves = z.infer<
	typeof import("./schemas").alt_versao_chavesSchema
>;
export type AltVersaoChavesRelations = Record<string, never>;

export type AltVersaoChavesRelationKey = keyof AltVersaoChavesRelations;
