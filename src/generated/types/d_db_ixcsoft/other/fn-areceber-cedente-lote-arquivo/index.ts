/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnAreceberCedenteLoteArquivo = z.infer<
	typeof import("./schemas").fn_areceber_cedente_lote_arquivoSchema
>;
export type FnAreceberCedenteLoteArquivoRelations = Record<string, never>;

export type FnAreceberCedenteLoteArquivoRelationKey =
	keyof FnAreceberCedenteLoteArquivoRelations;
