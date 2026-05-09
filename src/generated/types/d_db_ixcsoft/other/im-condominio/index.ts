/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ImCondominio = z.infer<
	typeof import("./schemas").im_condominioSchema
>;
export type ImCondominioRelations = Record<string, never>;

export type ImCondominioRelationKey = keyof ImCondominioRelations;
