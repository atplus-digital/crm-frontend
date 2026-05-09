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
export type RadDiciItem = z.infer<
	typeof import("./schemas").rad_dici_itemSchema
>;
export type RadDiciItemRelations = Record<string, never>;

export type RadDiciItemRelationKey = keyof RadDiciItemRelations;
