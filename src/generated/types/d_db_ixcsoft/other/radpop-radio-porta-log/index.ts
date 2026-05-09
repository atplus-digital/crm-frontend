/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadpopRadioPortaLog = z.infer<
	typeof import("./schemas").radpop_radio_porta_logSchema
>;
export type RadpopRadioPortaLogRelations = Record<string, never>;

export type RadpopRadioPortaLogRelationKey = keyof RadpopRadioPortaLogRelations;
