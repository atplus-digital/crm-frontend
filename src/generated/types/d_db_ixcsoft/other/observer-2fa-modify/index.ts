/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Observer2faModify = z.infer<
	typeof import("./schemas").observer_2fa_modifySchema
>;
export type Observer2faModifyRelations = Record<string, never>;

export type Observer2faModifyRelationKey = keyof Observer2faModifyRelations;
