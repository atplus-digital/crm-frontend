/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IxcNotificationUsuarios = z.infer<
	typeof import("./schemas").ixc_notification_usuariosSchema
>;
export type IxcNotificationUsuariosRelations = Record<string, never>;

export type IxcNotificationUsuariosRelationKey =
	keyof IxcNotificationUsuariosRelations;
