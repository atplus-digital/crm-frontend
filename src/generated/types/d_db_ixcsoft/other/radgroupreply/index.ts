/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radgroupreply = z.infer<
	typeof import("./schemas").radgroupreplySchema
>;
export type RadgroupreplyRelations = Record<string, never>;

export type RadgroupreplyRelationKey = keyof RadgroupreplyRelations;
