/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipQueueLog = z.infer<
	typeof import("./schemas").voip_queue_logSchema
>;
export type VoipQueueLogRelations = Record<string, never>;

export type VoipQueueLogRelationKey = keyof VoipQueueLogRelations;
