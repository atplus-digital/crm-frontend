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
export type PrjProjetoHistorico = z.infer<
	typeof import("./schemas").prj_projeto_historicoSchema
>;
export type PrjProjetoHistoricoRelations = Record<string, never>;

export type PrjProjetoHistoricoRelationKey = keyof PrjProjetoHistoricoRelations;
