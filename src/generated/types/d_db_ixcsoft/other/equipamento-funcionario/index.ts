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
export type EquipamentoFuncionario = z.infer<
	typeof import("./schemas").equipamento_funcionarioSchema
>;
export type EquipamentoFuncionarioRelations = Record<string, never>;

export type EquipamentoFuncionarioRelationKey =
	keyof EquipamentoFuncionarioRelations;
