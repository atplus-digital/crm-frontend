/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadusuariosConsumoD = z.infer<
	typeof import("./schemas").radusuarios_consumo_dSchema
>;
export type RadusuariosConsumoDRelations = Record<string, never>;

export type RadusuariosConsumoDRelationKey = keyof RadusuariosConsumoDRelations;
