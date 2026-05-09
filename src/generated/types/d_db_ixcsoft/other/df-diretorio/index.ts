/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfDiretorio = z.infer<
	typeof import("./schemas").df_diretorioSchema
>;
export type DfDiretorioRelations = Record<string, never>;

export type DfDiretorioRelationKey = keyof DfDiretorioRelations;
