/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ArquivosConvenio = z.infer<
	typeof import("./schemas").arquivos_convenioSchema
>;
export type ArquivosConvenioRelations = Record<string, never>;

export type ArquivosConvenioRelationKey = keyof ArquivosConvenioRelations;
