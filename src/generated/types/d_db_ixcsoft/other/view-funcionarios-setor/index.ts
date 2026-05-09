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
export type ViewFuncionariosSetor = z.infer<
	typeof import("./schemas").view_funcionarios_setorSchema
>;
export type ViewFuncionariosSetorRelations = Record<string, never>;

export type ViewFuncionariosSetorRelationKey =
	keyof ViewFuncionariosSetorRelations;
