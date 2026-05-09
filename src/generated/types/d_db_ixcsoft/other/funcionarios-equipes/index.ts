/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FuncionariosEquipes = z.infer<
	typeof import("./schemas").funcionarios_equipesSchema
>;
export type FuncionariosEquipesRelations = Record<string, never>;

export type FuncionariosEquipesRelationKey = keyof FuncionariosEquipesRelations;
