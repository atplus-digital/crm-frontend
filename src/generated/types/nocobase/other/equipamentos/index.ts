/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Equipamentos = z.infer<
	typeof import("./schemas").equipamentosSchema
>;
export type EquipamentosRelations = z.infer<
	typeof import("./schemas").equipamentosRelationSchema
>;

export type EquipamentosRelationKey = keyof EquipamentosRelations;
