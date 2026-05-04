/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Setor = z.infer<typeof import("./schemas").setorSchema>;
export type SetorRelations = z.infer<
	typeof import("./schemas").setorRelationSchema
>;

export type SetorRelationKey = keyof SetorRelations;
