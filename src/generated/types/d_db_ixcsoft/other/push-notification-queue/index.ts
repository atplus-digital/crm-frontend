/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PushNotificationQueue = z.infer<
	typeof import("./schemas").push_notification_queueSchema
>;
export type PushNotificationQueueRelations = Record<string, never>;

export type PushNotificationQueueRelationKey =
	keyof PushNotificationQueueRelations;
