/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnApagarLoteArquivo = z.infer<
	typeof import("./schemas").fn_apagar_lote_arquivoSchema
>;
export type FnApagarLoteArquivoRelations = Record<string, never>;

export type FnApagarLoteArquivoRelationKey = keyof FnApagarLoteArquivoRelations;
