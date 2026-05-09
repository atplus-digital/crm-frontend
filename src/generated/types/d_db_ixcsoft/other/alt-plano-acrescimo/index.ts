/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AltPlanoAcrescimo = z.infer<
	typeof import("./schemas").alt_plano_acrescimoSchema
>;
export type AltPlanoAcrescimoRelations = Record<string, never>;

export type AltPlanoAcrescimoRelationKey = keyof AltPlanoAcrescimoRelations;
