/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfCoordenada = z.infer<
	typeof import("./schemas").df_coordenadaSchema
>;
export type DfCoordenadaRelations = Record<string, never>;

export type DfCoordenadaRelationKey = keyof DfCoordenadaRelations;
