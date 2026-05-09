/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radcheck = z.infer<typeof import("./schemas").radcheckSchema>;
export type RadcheckRelations = Record<string, never>;

export type RadcheckRelationKey = keyof RadcheckRelations;
