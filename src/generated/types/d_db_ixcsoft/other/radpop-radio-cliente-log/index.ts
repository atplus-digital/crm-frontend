/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadpopRadioClienteLog = z.infer<
	typeof import("./schemas").radpop_radio_cliente_logSchema
>;
export type RadpopRadioClienteLogRelations = Record<string, never>;

export type RadpopRadioClienteLogRelationKey =
	keyof RadpopRadioClienteLogRelations;
