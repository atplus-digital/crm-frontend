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
export type Funcionarios = z.infer<
	typeof import("./schemas").funcionariosSchema
>;
export type FuncionariosRelations = z.infer<
	typeof import("./schemas").funcionariosRelationSchema
>;

export type FuncionariosRelationKey = keyof FuncionariosRelations;
