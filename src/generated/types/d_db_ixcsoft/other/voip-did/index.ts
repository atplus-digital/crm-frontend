/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipDid = z.infer<typeof import("./schemas").voip_didSchema>;
export type VoipDidRelations = Record<string, never>;

export type VoipDidRelationKey = keyof VoipDidRelations;
