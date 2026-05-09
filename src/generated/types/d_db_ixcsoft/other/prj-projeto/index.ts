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
export type PrjProjeto = z.infer<typeof import("./schemas").prj_projetoSchema>;
export type PrjProjetoRelations = Record<string, never>;

export type PrjProjetoRelationKey = keyof PrjProjetoRelations;
