/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadpopOltSlot = z.infer<
	typeof import("./schemas").radpop_olt_slotSchema
>;
export type RadpopOltSlotRelations = Record<string, never>;

export type RadpopOltSlotRelationKey = keyof RadpopOltSlotRelations;
