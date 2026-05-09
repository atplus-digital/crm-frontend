/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type HotsiteModeloNotificacoesPush = z.infer<
	typeof import("./schemas").hotsite_modelo_notificacoes_pushSchema
>;
export type HotsiteModeloNotificacoesPushRelations = Record<string, never>;

export type HotsiteModeloNotificacoesPushRelationKey =
	keyof HotsiteModeloNotificacoesPushRelations;
