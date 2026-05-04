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
export type OpcoesSmp = z.infer<typeof import("./schemas").opcoes_smpSchema>;
export type OpcoesSmpRelations = z.infer<
	typeof import("./schemas").opcoes_smpRelationSchema
>;

export type OpcoesSmpRelationKey = keyof OpcoesSmpRelations;
