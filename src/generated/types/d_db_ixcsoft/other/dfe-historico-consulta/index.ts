/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfeHistoricoConsulta = z.infer<
	typeof import("./schemas").dfe_historico_consultaSchema
>;
export type DfeHistoricoConsultaRelations = Record<string, never>;

export type DfeHistoricoConsultaRelationKey =
	keyof DfeHistoricoConsultaRelations;
