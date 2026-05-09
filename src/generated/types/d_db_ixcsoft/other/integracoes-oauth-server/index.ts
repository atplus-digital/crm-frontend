/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IntegracoesOauthServer = z.infer<
	typeof import("./schemas").integracoes_oauth_serverSchema
>;
export type IntegracoesOauthServerRelations = Record<string, never>;

export type IntegracoesOauthServerRelationKey =
	keyof IntegracoesOauthServerRelations;
