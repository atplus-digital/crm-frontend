/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PortaSbcSummit = z.infer<
	typeof import("./schemas").porta_sbc_summitSchema
>;
export type PortaSbcSummitRelations = Record<string, never>;

export type PortaSbcSummitRelationKey = keyof PortaSbcSummitRelations;
