/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadauthRadcheck = z.infer<
	typeof import("./schemas").radauth_radcheckSchema
>;
export type RadauthRadcheckRelations = Record<string, never>;

export type RadauthRadcheckRelationKey = keyof RadauthRadcheckRelations;
