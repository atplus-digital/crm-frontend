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
export type ReservaRedeNeutra = z.infer<
	typeof import("./schemas").reserva_rede_neutraSchema
>;
export type ReservaRedeNeutraRelations = Record<string, never>;

export type ReservaRedeNeutraRelationKey = keyof ReservaRedeNeutraRelations;
