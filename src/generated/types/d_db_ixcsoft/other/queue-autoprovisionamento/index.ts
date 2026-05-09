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
export type QueueAutoprovisionamento = z.infer<
	typeof import("./schemas").queue_autoprovisionamentoSchema
>;
export type QueueAutoprovisionamentoRelations = Record<string, never>;

export type QueueAutoprovisionamentoRelationKey =
	keyof QueueAutoprovisionamentoRelations;
