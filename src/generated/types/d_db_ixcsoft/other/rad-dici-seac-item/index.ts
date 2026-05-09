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
export type RadDiciSeacItem = z.infer<
	typeof import("./schemas").rad_dici_seac_itemSchema
>;
export type RadDiciSeacItemRelations = Record<string, never>;

export type RadDiciSeacItemRelationKey = keyof RadDiciSeacItemRelations;
