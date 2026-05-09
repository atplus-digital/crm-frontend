/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberRemessasArquivo = z.infer<
	typeof import("./schemas").fn_areceber_remessas_arquivoSchema
>;
export type FnAreceberRemessasArquivoRelations = Record<string, never>;

export type FnAreceberRemessasArquivoRelationKey =
	keyof FnAreceberRemessasArquivoRelations;
