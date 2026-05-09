/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadauthRadgroupcheck = z.infer<
	typeof import("./schemas").radauth_radgroupcheckSchema
>;
export type RadauthRadgroupcheckRelations = Record<string, never>;

export type RadauthRadgroupcheckRelationKey =
	keyof RadauthRadgroupcheckRelations;
