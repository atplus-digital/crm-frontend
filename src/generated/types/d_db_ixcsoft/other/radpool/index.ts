/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radpool = z.infer<typeof import("./schemas").radpoolSchema>;
export type RadpoolRelations = Record<string, never>;

export type RadpoolRelationKey = keyof RadpoolRelations;
