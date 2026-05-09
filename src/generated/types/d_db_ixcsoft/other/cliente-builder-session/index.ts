/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteBuilderSession = z.infer<
	typeof import("./schemas").cliente_builder_sessionSchema
>;
export type ClienteBuilderSessionRelations = Record<string, never>;

export type ClienteBuilderSessionRelationKey =
	keyof ClienteBuilderSessionRelations;
