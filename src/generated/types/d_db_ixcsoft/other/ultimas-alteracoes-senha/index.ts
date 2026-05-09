/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type UltimasAlteracoesSenha = z.infer<
	typeof import("./schemas").ultimas_alteracoes_senhaSchema
>;
export type UltimasAlteracoesSenhaRelations = Record<string, never>;

export type UltimasAlteracoesSenhaRelationKey =
	keyof UltimasAlteracoesSenhaRelations;
