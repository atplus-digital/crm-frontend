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
export type RadgrupoPlanos = z.infer<
	typeof import("./schemas").radgrupo_planosSchema
>;
export type RadgrupoPlanosRelations = Record<string, never>;

export type RadgrupoPlanosRelationKey = keyof RadgrupoPlanosRelations;
