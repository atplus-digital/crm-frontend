/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteContratoHistorico = z.infer<
	typeof import("./schemas").cliente_contrato_historicoSchema
>;
export type ClienteContratoHistoricoRelations = Record<string, never>;

export type ClienteContratoHistoricoRelationKey =
	keyof ClienteContratoHistoricoRelations;
