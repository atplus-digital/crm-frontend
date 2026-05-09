/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PrjProjetoAlocacao = z.infer<
	typeof import("./schemas").prj_projeto_alocacaoSchema
>;
export type PrjProjetoAlocacaoRelations = Record<string, never>;

export type PrjProjetoAlocacaoRelationKey = keyof PrjProjetoAlocacaoRelations;
