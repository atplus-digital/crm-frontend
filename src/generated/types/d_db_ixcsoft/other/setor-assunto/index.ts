/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SetorAssunto = z.infer<
	typeof import("./schemas").setor_assuntoSchema
>;
export type SetorAssuntoRelations = Record<string, never>;

export type SetorAssuntoRelationKey = keyof SetorAssuntoRelations;
