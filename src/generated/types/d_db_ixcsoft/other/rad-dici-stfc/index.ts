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
export type RadDiciStfc = z.infer<
	typeof import("./schemas").rad_dici_stfcSchema
>;
export type RadDiciStfcRelations = Record<string, never>;

export type RadDiciStfcRelationKey = keyof RadDiciStfcRelations;
