/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ComentarioViagem = z.infer<
	typeof import("./schemas").comentario_viagemSchema
>;
export type ComentarioViagemRelations = z.infer<
	typeof import("./schemas").comentario_viagemRelationSchema
>;

export type ComentarioViagemRelationKey = keyof ComentarioViagemRelations;
