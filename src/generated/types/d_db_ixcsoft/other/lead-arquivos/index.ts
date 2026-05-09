/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LeadArquivos = z.infer<
	typeof import("./schemas").lead_arquivosSchema
>;
export type LeadArquivosRelations = Record<string, never>;

export type LeadArquivosRelationKey = keyof LeadArquivosRelations;
