/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HsProdutosDados = z.infer<
	typeof import("./schemas").hs_produtos_dadosSchema
>;
export type HsProdutosDadosRelations = Record<string, never>;

export type HsProdutosDadosRelationKey = keyof HsProdutosDadosRelations;
