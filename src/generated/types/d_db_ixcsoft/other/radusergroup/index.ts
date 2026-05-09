/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radusergroup = z.infer<
	typeof import("./schemas").radusergroupSchema
>;
export type RadusergroupRelations = Record<string, never>;

export type RadusergroupRelationKey = keyof RadusergroupRelations;
