/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadauthRadreply = z.infer<
	typeof import("./schemas").radauth_radreplySchema
>;
export type RadauthRadreplyRelations = Record<string, never>;

export type RadauthRadreplyRelationKey = keyof RadauthRadreplyRelations;
