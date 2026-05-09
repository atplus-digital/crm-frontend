/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfElementosCoordenadas = z.infer<
	typeof import("./schemas").df_elementos_coordenadasSchema
>;
export type DfElementosCoordenadasRelations = Record<string, never>;

export type DfElementosCoordenadasRelationKey =
	keyof DfElementosCoordenadasRelations;
