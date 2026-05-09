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
export type RadDiciStfcItem = z.infer<
	typeof import("./schemas").rad_dici_stfc_itemSchema
>;
export type RadDiciStfcItemRelations = Record<string, never>;

export type RadDiciStfcItemRelationKey = keyof RadDiciStfcItemRelations;
