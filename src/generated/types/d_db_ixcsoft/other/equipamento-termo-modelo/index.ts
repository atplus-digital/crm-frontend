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
export type EquipamentoTermoModelo = z.infer<
	typeof import("./schemas").equipamento_termo_modeloSchema
>;
export type EquipamentoTermoModeloRelations = Record<string, never>;

export type EquipamentoTermoModeloRelationKey =
	keyof EquipamentoTermoModeloRelations;
