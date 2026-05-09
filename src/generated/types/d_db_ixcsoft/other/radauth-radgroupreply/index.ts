/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadauthRadgroupreply = z.infer<
	typeof import("./schemas").radauth_radgroupreplySchema
>;
export type RadauthRadgroupreplyRelations = Record<string, never>;

export type RadauthRadgroupreplyRelationKey =
	keyof RadauthRadgroupreplyRelations;
