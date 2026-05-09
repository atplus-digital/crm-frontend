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
export type OmnichannelMessageQueue = z.infer<
	typeof import("./schemas").omnichannel_message_queueSchema
>;
export type OmnichannelMessageQueueRelations = Record<string, never>;

export type OmnichannelMessageQueueRelationKey =
	keyof OmnichannelMessageQueueRelations;
