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
export type QualirunInfoAdicionais = z.infer<
	typeof import("./schemas").qualirun_info_adicionaisSchema
>;
export type QualirunInfoAdicionaisRelations = z.infer<
	typeof import("./schemas").qualirun_info_adicionaisRelationSchema
>;

export type QualirunInfoAdicionaisRelationKey =
	keyof QualirunInfoAdicionaisRelations;
