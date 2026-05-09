/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipNumeroEntrantePool = z.infer<
	typeof import("./schemas").voip_numero_entrante_poolSchema
>;
export type VoipNumeroEntrantePoolRelations = Record<string, never>;

export type VoipNumeroEntrantePoolRelationKey =
	keyof VoipNumeroEntrantePoolRelations;
