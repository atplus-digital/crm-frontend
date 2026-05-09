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
export type OsRedeNeutra = z.infer<
	typeof import("./schemas").os_rede_neutraSchema
>;
export type OsRedeNeutraRelations = Record<string, never>;

export type OsRedeNeutraRelationKey = keyof OsRedeNeutraRelations;
