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
export type FuncionarioMotivoHorario = z.infer<
	typeof import("./schemas").funcionario_motivo_horarioSchema
>;
export type FuncionarioMotivoHorarioRelations = Record<string, never>;

export type FuncionarioMotivoHorarioRelationKey =
	keyof FuncionarioMotivoHorarioRelations;
