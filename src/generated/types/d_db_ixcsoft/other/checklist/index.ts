/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Checklist = z.infer<typeof import("./schemas").checklistSchema>;
export type ChecklistRelations = Record<string, never>;

export type ChecklistRelationKey = keyof ChecklistRelations;
