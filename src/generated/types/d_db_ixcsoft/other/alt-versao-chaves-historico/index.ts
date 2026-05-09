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
export type AltVersaoChavesHistorico = z.infer<
	typeof import("./schemas").alt_versao_chaves_historicoSchema
>;
export type AltVersaoChavesHistoricoRelations = Record<string, never>;

export type AltVersaoChavesHistoricoRelationKey =
	keyof AltVersaoChavesHistoricoRelations;
