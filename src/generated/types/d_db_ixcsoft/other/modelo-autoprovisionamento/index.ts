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
export type ModeloAutoprovisionamento = z.infer<
	typeof import("./schemas").modelo_autoprovisionamentoSchema
>;
export type ModeloAutoprovisionamentoRelations = Record<string, never>;

export type ModeloAutoprovisionamentoRelationKey =
	keyof ModeloAutoprovisionamentoRelations;
