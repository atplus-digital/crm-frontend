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
export type WflProcessoArquivos = z.infer<
	typeof import("./schemas").wfl_processo_arquivosSchema
>;
export type WflProcessoArquivosRelations = Record<string, never>;

export type WflProcessoArquivosRelationKey = keyof WflProcessoArquivosRelations;
