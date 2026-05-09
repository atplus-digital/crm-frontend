/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SubGrupoProdudos = z.infer<
	typeof import("./schemas").sub_grupo_produdosSchema
>;
export type SubGrupoProdudosRelations = Record<string, never>;

export type SubGrupoProdudosRelationKey = keyof SubGrupoProdudosRelations;
