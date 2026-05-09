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
export type VoipUraHorariosRange = z.infer<
	typeof import("./schemas").voip_ura_horarios_rangeSchema
>;
export type VoipUraHorariosRangeRelations = Record<string, never>;

export type VoipUraHorariosRangeRelationKey =
	keyof VoipUraHorariosRangeRelations;
