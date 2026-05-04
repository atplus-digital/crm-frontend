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
export type NegociacoesComentarios = z.infer<
	typeof import("./schemas").negociacoes_comentariosSchema
>;
export type NegociacoesComentariosRelations = z.infer<
	typeof import("./schemas").negociacoes_comentariosRelationSchema
>;

export type NegociacoesComentariosRelationKey =
	keyof NegociacoesComentariosRelations;
