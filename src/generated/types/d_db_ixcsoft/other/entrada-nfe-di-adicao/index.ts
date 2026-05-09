/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type EntradaNfeDiAdicao = z.infer<
	typeof import("./schemas").entrada_nfe_di_adicaoSchema
>;
export type EntradaNfeDiAdicaoRelations = Record<string, never>;

export type EntradaNfeDiAdicaoRelationKey = keyof EntradaNfeDiAdicaoRelations;
