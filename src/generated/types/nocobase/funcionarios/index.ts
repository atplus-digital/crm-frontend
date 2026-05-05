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
export type FFuncionarios = z.infer<
	typeof import("./schemas").f_funcionariosSchema
>;
export type FFuncionariosRelations = z.infer<
	typeof import("./schemas").f_funcionariosRelationSchema
>;

export type FFuncionariosRelationKey = keyof FFuncionariosRelations;
