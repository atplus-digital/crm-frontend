/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Cel = z.infer<typeof import("./schemas").celSchema>;
export type CelRelations = Record<string, never>;

export type CelRelationKey = keyof CelRelations;
