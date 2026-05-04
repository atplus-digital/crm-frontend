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
export type Aegis = z.infer<typeof import("./schemas").aegisSchema>;
export type AegisRelations = z.infer<
	typeof import("./schemas").aegisRelationSchema
>;

export type AegisRelationKey = keyof AegisRelations;
