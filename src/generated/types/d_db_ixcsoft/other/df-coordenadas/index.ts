/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfCoordenadas = z.infer<
	typeof import("./schemas").df_coordenadasSchema
>;
export type DfCoordenadasRelations = Record<string, never>;

export type DfCoordenadasRelationKey = keyof DfCoordenadasRelations;
