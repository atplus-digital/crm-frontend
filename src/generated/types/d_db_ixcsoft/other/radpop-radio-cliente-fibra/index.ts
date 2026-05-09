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
export type RadpopRadioClienteFibra = z.infer<
	typeof import("./schemas").radpop_radio_cliente_fibraSchema
>;
export type RadpopRadioClienteFibraRelations = Record<string, never>;

export type RadpopRadioClienteFibraRelationKey =
	keyof RadpopRadioClienteFibraRelations;
