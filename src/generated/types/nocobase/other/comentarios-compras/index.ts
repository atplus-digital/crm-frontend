/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ComentariosCompras = z.infer<
	typeof import("./schemas").comentarios_comprasSchema
>;
export type ComentariosComprasRelations = z.infer<
	typeof import("./schemas").comentarios_comprasRelationSchema
>;

export type ComentariosComprasRelationKey = keyof ComentariosComprasRelations;
