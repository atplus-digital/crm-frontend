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
export type EmpresaSetor = z.infer<
	typeof import("./schemas").empresa_setorSchema
>;
export type EmpresaSetorRelations = Record<string, never>;

export type EmpresaSetorRelationKey = keyof EmpresaSetorRelations;
