/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadauthRadpostauth = z.infer<
	typeof import("./schemas").radauth_radpostauthSchema
>;
export type RadauthRadpostauthRelations = Record<string, never>;

export type RadauthRadpostauthRelationKey = keyof RadauthRadpostauthRelations;
