/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmConcorrenteHistorico = z.infer<
	typeof import("./schemas").crm_concorrente_historicoSchema
>;
export type CrmConcorrenteHistoricoRelations = Record<string, never>;

export type CrmConcorrenteHistoricoRelationKey =
	keyof CrmConcorrenteHistoricoRelations;
