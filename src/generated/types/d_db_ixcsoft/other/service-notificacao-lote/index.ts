/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ServiceNotificacaoLote = z.infer<
	typeof import("./schemas").service_notificacao_loteSchema
>;
export type ServiceNotificacaoLoteRelations = Record<string, never>;

export type ServiceNotificacaoLoteRelationKey =
	keyof ServiceNotificacaoLoteRelations;
