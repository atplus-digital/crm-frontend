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
export type ClienteChave = z.infer<
	typeof import("./schemas").cliente_chaveSchema
>;
export type ClienteChaveRelations = Record<string, never>;

export type ClienteChaveRelationKey = keyof ClienteChaveRelations;
