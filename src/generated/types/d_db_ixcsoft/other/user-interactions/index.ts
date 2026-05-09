/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type UserInteractions = z.infer<
	typeof import("./schemas").user_interactionsSchema
>;
export type UserInteractionsRelations = Record<string, never>;

export type UserInteractionsRelationKey = keyof UserInteractionsRelations;
