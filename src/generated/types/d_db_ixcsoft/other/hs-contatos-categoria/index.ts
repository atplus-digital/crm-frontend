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
export type HsContatosCategoria = z.infer<
	typeof import("./schemas").hs_contatos_categoriaSchema
>;
export type HsContatosCategoriaRelations = Record<string, never>;

export type HsContatosCategoriaRelationKey = keyof HsContatosCategoriaRelations;
