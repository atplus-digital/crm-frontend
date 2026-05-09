/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RotinaStatusAtendimento = z.infer<
	typeof import("./schemas").rotina_status_atendimentoSchema
>;
export type RotinaStatusAtendimentoRelations = Record<string, never>;

export type RotinaStatusAtendimentoRelationKey =
	keyof RotinaStatusAtendimentoRelations;
