/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteValidaCelular = z.infer<
	typeof import("./schemas").cliente_valida_celularSchema
>;
export type ClienteValidaCelularRelations = Record<string, never>;

export type ClienteValidaCelularRelationKey =
	keyof ClienteValidaCelularRelations;
