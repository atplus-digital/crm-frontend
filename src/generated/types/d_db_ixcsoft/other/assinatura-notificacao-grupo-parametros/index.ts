/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AssinaturaNotificacaoGrupoParametros = z.infer<
	typeof import("./schemas").assinatura_notificacao_grupo_parametrosSchema
>;
export type AssinaturaNotificacaoGrupoParametrosRelations = Record<
	string,
	never
>;

export type AssinaturaNotificacaoGrupoParametrosRelationKey =
	keyof AssinaturaNotificacaoGrupoParametrosRelations;
