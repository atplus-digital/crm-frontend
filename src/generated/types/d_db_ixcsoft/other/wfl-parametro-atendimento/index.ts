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
export type WflParametroAtendimento = z.infer<
	typeof import("./schemas").wfl_parametro_atendimentoSchema
>;
export type WflParametroAtendimentoRelations = Record<string, never>;

export type WflParametroAtendimentoRelationKey =
	keyof WflParametroAtendimentoRelations;
