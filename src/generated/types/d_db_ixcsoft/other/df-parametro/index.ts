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
export type DfParametro = z.infer<
	typeof import("./schemas").df_parametroSchema
>;
export type DfParametroRelations = Record<string, never>;

export type DfParametroRelationKey = keyof DfParametroRelations;
