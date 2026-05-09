/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VoipIax = z.infer<typeof import("./schemas").voip_iaxSchema>;
export type VoipIaxRelations = Record<string, never>;

export type VoipIaxRelationKey = keyof VoipIaxRelations;
