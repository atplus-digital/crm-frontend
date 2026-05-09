/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CaixaMensagem = z.infer<
	typeof import("./schemas").caixa_mensagemSchema
>;
export type CaixaMensagemRelations = Record<string, never>;

export type CaixaMensagemRelationKey = keyof CaixaMensagemRelations;
