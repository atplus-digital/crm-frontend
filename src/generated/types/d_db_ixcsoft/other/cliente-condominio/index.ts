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
export type ClienteCondominio = z.infer<
	typeof import("./schemas").cliente_condominioSchema
>;
export type ClienteCondominioRelations = Record<string, never>;

export type ClienteCondominioRelationKey = keyof ClienteCondominioRelations;
