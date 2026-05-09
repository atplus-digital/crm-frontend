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
export type VoipQueues = z.infer<typeof import("./schemas").voip_queuesSchema>;
export type VoipQueuesRelations = Record<string, never>;

export type VoipQueuesRelationKey = keyof VoipQueuesRelations;
