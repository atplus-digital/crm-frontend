/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TableTest = z.infer<typeof import("./schemas").table_testSchema>;
export type TableTestRelations = Record<string, never>;

export type TableTestRelationKey = keyof TableTestRelations;
