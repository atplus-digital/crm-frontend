/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipFollowme = z.infer<
	typeof import("./schemas").voip_followmeSchema
>;
export type VoipFollowmeRelations = Record<string, never>;

export type VoipFollowmeRelationKey = keyof VoipFollowmeRelations;
