/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteBens = z.infer<
	typeof import("./schemas").cliente_bensSchema
>;
export type ClienteBensRelations = Record<string, never>;

export type ClienteBensRelationKey = keyof ClienteBensRelations;
