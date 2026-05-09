/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmNegociacoesArquivos = z.infer<
	typeof import("./schemas").crm_negociacoes_arquivosSchema
>;
export type CrmNegociacoesArquivosRelations = Record<string, never>;

export type CrmNegociacoesArquivosRelationKey =
	keyof CrmNegociacoesArquivosRelations;
