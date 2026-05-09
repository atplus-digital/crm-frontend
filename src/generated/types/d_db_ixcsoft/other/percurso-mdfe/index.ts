/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PercursoMdfe = z.infer<
	typeof import("./schemas").percurso_mdfeSchema
>;
export type PercursoMdfeRelations = Record<string, never>;

export type PercursoMdfeRelationKey = keyof PercursoMdfeRelations;
