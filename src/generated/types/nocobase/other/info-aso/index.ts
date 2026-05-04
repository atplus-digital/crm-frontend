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
export type InfoAso = z.infer<typeof import("./schemas").info_asoSchema>;
export type InfoAsoRelations = z.infer<
	typeof import("./schemas").info_asoRelationSchema
>;

export type InfoAsoRelationKey = keyof InfoAsoRelations;
