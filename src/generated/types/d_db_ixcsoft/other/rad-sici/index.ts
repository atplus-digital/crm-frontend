/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadSici = z.infer<typeof import("./schemas").rad_siciSchema>;
export type RadSiciRelations = Record<string, never>;

export type RadSiciRelationKey = keyof RadSiciRelations;
