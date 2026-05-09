/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IxcNotifications = z.infer<
	typeof import("./schemas").ixc_notificationsSchema
>;
export type IxcNotificationsRelations = Record<string, never>;

export type IxcNotificationsRelationKey = keyof IxcNotificationsRelations;
