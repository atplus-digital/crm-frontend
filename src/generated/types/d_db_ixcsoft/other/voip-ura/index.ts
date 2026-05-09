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
export type VoipUra = z.infer<typeof import("./schemas").voip_uraSchema>;
export type VoipUraRelations = Record<string, never>;

export type VoipUraRelationKey = keyof VoipUraRelations;
