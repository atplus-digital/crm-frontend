/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TrocasdetitularidadeComentarios = z.infer<
	typeof import("./schemas").trocasdetitularidade_comentariosSchema
>;
export type TrocasdetitularidadeComentariosRelations = z.infer<
	typeof import("./schemas").trocasdetitularidade_comentariosRelationSchema
>;

export type TrocasdetitularidadeComentariosRelationKey =
	keyof TrocasdetitularidadeComentariosRelations;
