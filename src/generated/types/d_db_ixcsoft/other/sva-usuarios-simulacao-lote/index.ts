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
export type SvaUsuariosSimulacaoLote = z.infer<
	typeof import("./schemas").sva_usuarios_simulacao_loteSchema
>;
export type SvaUsuariosSimulacaoLoteRelations = Record<string, never>;

export type SvaUsuariosSimulacaoLoteRelationKey =
	keyof SvaUsuariosSimulacaoLoteRelations;
