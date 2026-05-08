/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Uf = z.infer<typeof import("./schemas").ufSchema>;
export type UfRelations = z.infer<typeof import("./schemas").ufRelationSchema>;

export type UfRelationKey = keyof UfRelations;
