/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberArquivoBoleto = z.infer<
	typeof import("./schemas").fn_areceber_arquivo_boletoSchema
>;
export type FnAreceberArquivoBoletoRelations = Record<string, never>;

export type FnAreceberArquivoBoletoRelationKey =
	keyof FnAreceberArquivoBoletoRelations;
