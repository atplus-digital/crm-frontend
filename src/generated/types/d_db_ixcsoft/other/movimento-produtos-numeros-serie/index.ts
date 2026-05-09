/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type MovimentoProdutosNumerosSerie = z.infer<
	typeof import("./schemas").movimento_produtos_numeros_serieSchema
>;
export type MovimentoProdutosNumerosSerieRelations = Record<string, never>;

export type MovimentoProdutosNumerosSerieRelationKey =
	keyof MovimentoProdutosNumerosSerieRelations;
