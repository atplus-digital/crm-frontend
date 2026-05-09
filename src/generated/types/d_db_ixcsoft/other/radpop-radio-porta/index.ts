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
export type RadpopRadioPorta = z.infer<
	typeof import("./schemas").radpop_radio_portaSchema
>;
export type RadpopRadioPortaRelations = Record<string, never>;

export type RadpopRadioPortaRelationKey = keyof RadpopRadioPortaRelations;
