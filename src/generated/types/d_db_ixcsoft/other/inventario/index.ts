/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Inventario = z.infer<typeof import("./schemas").inventarioSchema>;
export type InventarioRelations = Record<string, never>;

export type InventarioRelationKey = keyof InventarioRelations;
