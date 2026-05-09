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
export type TvEquipamentos = z.infer<
	typeof import("./schemas").tv_equipamentosSchema
>;
export type TvEquipamentosRelations = Record<string, never>;

export type TvEquipamentosRelationKey = keyof TvEquipamentosRelations;
