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
export type FnAreceberCedenteRemessaArquivo = z.infer<
	typeof import("./schemas").fn_areceber_cedente_remessaarquivoSchema
>;
export type FnAreceberCedenteRemessaArquivoRelations = Record<string, never>;

export type FnAreceberCedenteRemessaArquivoRelationKey =
	keyof FnAreceberCedenteRemessaArquivoRelations;
