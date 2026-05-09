/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type MoedasCotacao = z.infer<
	typeof import("./schemas").moedas_cotacaoSchema
>;
export type MoedasCotacaoRelations = Record<string, never>;

export type MoedasCotacaoRelationKey = keyof MoedasCotacaoRelations;
