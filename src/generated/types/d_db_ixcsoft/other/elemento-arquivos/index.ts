/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ElementoArquivos = z.infer<
	typeof import("./schemas").elemento_arquivosSchema
>;
export type ElementoArquivosRelations = Record<string, never>;

export type ElementoArquivosRelationKey = keyof ElementoArquivosRelations;
