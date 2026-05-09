/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnApagarArquivos = z.infer<
	typeof import("./schemas").fn_apagar_arquivosSchema
>;
export type FnApagarArquivosRelations = Record<string, never>;

export type FnApagarArquivosRelationKey = keyof FnApagarArquivosRelations;
