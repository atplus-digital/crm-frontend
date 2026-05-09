/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type NasRedeNat = z.infer<typeof import("./schemas").nas_rede_natSchema>;
export type NasRedeNatRelations = Record<string, never>;

export type NasRedeNatRelationKey = keyof NasRedeNatRelations;
