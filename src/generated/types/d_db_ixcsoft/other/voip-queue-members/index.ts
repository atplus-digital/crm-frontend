/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipQueueMembers = z.infer<
	typeof import("./schemas").voip_queue_membersSchema
>;
export type VoipQueueMembersRelations = Record<string, never>;

export type VoipQueueMembersRelationKey = keyof VoipQueueMembersRelations;
