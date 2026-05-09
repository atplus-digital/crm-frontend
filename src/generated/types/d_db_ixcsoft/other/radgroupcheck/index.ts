/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radgroupcheck = z.infer<
	typeof import("./schemas").radgroupcheckSchema
>;
export type RadgroupcheckRelations = Record<string, never>;

export type RadgroupcheckRelationKey = keyof RadgroupcheckRelations;
