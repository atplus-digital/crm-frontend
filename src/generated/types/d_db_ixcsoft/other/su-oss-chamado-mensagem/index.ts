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
export type SuOssChamadoMensagem = z.infer<
	typeof import("./schemas").su_oss_chamado_mensagemSchema
>;
export type SuOssChamadoMensagemRelations = Record<string, never>;

export type SuOssChamadoMensagemRelationKey =
	keyof SuOssChamadoMensagemRelations;
