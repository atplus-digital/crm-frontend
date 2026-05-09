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
export type SmartCards = z.infer<typeof import("./schemas").smart_cardsSchema>;
export type SmartCardsRelations = Record<string, never>;

export type SmartCardsRelationKey = keyof SmartCardsRelations;
