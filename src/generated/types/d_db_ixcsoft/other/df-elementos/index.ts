/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type DfElementos = z.infer<
	typeof import("./schemas").df_elementosSchema
>;
export type DfElementosRelations = Record<string, never>;

export type DfElementosRelationKey = keyof DfElementosRelations;
