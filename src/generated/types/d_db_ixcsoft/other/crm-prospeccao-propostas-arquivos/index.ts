/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmProspeccaoPropostasArquivos = z.infer<
	typeof import("./schemas").crm_prospeccao_propostas_arquivosSchema
>;
export type CrmProspeccaoPropostasArquivosRelations = Record<string, never>;

export type CrmProspeccaoPropostasArquivosRelationKey =
	keyof CrmProspeccaoPropostasArquivosRelations;
