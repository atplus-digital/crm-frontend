/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsLogomarca = z.infer<
	typeof import("./schemas").hs_logomarcaSchema
>;
export type HsLogomarcaRelations = Record<string, never>;

export type HsLogomarcaRelationKey = keyof HsLogomarcaRelations;
