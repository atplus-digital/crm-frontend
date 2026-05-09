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
export type AltPlanoLogTitulo = z.infer<
	typeof import("./schemas").alt_plano_log_tituloSchema
>;
export type AltPlanoLogTituloRelations = Record<string, never>;

export type AltPlanoLogTituloRelationKey = keyof AltPlanoLogTituloRelations;
