/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ChecklistItem = z.infer<
	typeof import("./schemas").checklist_itemSchema
>;
export type ChecklistItemRelations = Record<string, never>;

export type ChecklistItemRelationKey = keyof ChecklistItemRelations;
