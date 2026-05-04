/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type EquipamentosEmPredios = z.infer<
	typeof import("./schemas").equipamentos_em_prediosSchema
>;
export type EquipamentosEmPrediosRelations = z.infer<
	typeof import("./schemas").equipamentos_em_prediosRelationSchema
>;

export type EquipamentosEmPrediosRelationKey =
	keyof EquipamentosEmPrediosRelations;
