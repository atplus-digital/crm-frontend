/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfConexaoElemento = z.infer<
	typeof import("./schemas").df_conexao_elementoSchema
>;
export type DfConexaoElementoRelations = Record<string, never>;

export type DfConexaoElementoRelationKey = keyof DfConexaoElementoRelations;
