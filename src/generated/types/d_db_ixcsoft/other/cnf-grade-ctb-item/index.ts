/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CnfGradeCtbItem = z.infer<
	typeof import("./schemas").cnf_grade_ctb_itemSchema
>;
export type CnfGradeCtbItemRelations = Record<string, never>;

export type CnfGradeCtbItemRelationKey = keyof CnfGradeCtbItemRelations;
