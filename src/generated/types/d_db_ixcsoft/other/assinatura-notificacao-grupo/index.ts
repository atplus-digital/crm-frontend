/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AssinaturaNotificacaoGrupo = z.infer<
	typeof import("./schemas").assinatura_notificacao_grupoSchema
>;
export type AssinaturaNotificacaoGrupoRelations = Record<string, never>;

export type AssinaturaNotificacaoGrupoRelationKey =
	keyof AssinaturaNotificacaoGrupoRelations;
