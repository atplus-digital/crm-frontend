/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipQueueRules = z.infer<
	typeof import("./schemas").voip_queue_rulesSchema
>;
export type VoipQueueRulesRelations = Record<string, never>;

export type VoipQueueRulesRelationKey = keyof VoipQueueRulesRelations;
