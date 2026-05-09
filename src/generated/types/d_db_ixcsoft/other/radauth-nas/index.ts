/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadauthNas = z.infer<typeof import("./schemas").radauth_nasSchema>;
export type RadauthNasRelations = Record<string, never>;

export type RadauthNasRelationKey = keyof RadauthNasRelations;
