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
export type DiciInfraestrutura = z.infer<
	typeof import("./schemas").dici_infraestruturaSchema
>;
export type DiciInfraestruturaRelations = Record<string, never>;

export type DiciInfraestruturaRelationKey = keyof DiciInfraestruturaRelations;
