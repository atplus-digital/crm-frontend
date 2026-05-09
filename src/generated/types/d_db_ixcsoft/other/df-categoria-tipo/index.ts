/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfCategoriaTipo = z.infer<
	typeof import("./schemas").df_categoria_tipoSchema
>;
export type DfCategoriaTipoRelations = Record<string, never>;

export type DfCategoriaTipoRelationKey = keyof DfCategoriaTipoRelations;
