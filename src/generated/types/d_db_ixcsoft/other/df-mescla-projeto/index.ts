/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfMesclaProjeto = z.infer<
	typeof import("./schemas").df_mescla_projetoSchema
>;
export type DfMesclaProjetoRelations = Record<string, never>;

export type DfMesclaProjetoRelationKey = keyof DfMesclaProjetoRelations;
