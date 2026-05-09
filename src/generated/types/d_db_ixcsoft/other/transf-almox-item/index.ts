/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TransfAlmoxItem = z.infer<
	typeof import("./schemas").transf_almox_itemSchema
>;
export type TransfAlmoxItemRelations = Record<string, never>;

export type TransfAlmoxItemRelationKey = keyof TransfAlmoxItemRelations;
