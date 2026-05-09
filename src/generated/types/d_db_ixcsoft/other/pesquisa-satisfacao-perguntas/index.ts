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
export type PesquisaSatisfacaoPerguntas = z.infer<
	typeof import("./schemas").pesquisa_satisfacao_perguntasSchema
>;
export type PesquisaSatisfacaoPerguntasRelations = Record<string, never>;

export type PesquisaSatisfacaoPerguntasRelationKey =
	keyof PesquisaSatisfacaoPerguntasRelations;
