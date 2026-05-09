/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfProjetoFuncionarios = z.infer<
	typeof import("./schemas").df_projeto_funcionariosSchema
>;
export type DfProjetoFuncionariosRelations = Record<string, never>;

export type DfProjetoFuncionariosRelationKey =
	keyof DfProjetoFuncionariosRelations;
