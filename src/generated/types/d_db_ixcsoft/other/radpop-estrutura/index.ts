/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadpopEstrutura = z.infer<
	typeof import("./schemas").radpop_estruturaSchema
>;
export type RadpopEstruturaRelations = Record<string, never>;

export type RadpopEstruturaRelationKey = keyof RadpopEstruturaRelations;
