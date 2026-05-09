/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadauthIpsAutorizados = z.infer<
	typeof import("./schemas").radauth_ips_autorizadosSchema
>;
export type RadauthIpsAutorizadosRelations = Record<string, never>;

export type RadauthIpsAutorizadosRelationKey =
	keyof RadauthIpsAutorizadosRelations;
