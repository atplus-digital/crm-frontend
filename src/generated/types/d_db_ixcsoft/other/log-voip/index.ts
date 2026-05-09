/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogVoip = z.infer<typeof import("./schemas").log_voipSchema>;
export type LogVoipRelations = Record<string, never>;

export type LogVoipRelationKey = keyof LogVoipRelations;
