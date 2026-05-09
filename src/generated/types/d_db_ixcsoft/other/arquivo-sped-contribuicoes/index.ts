/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ArquivoSpedContribuicoes = z.infer<
	typeof import("./schemas").arquivo_sped_contribuicoesSchema
>;
export type ArquivoSpedContribuicoesRelations = Record<string, never>;

export type ArquivoSpedContribuicoesRelationKey =
	keyof ArquivoSpedContribuicoesRelations;
