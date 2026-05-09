/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Empresa = z.infer<typeof import("./schemas").empresaSchema>;
export type EmpresaRelations = Record<string, never>;

export type EmpresaRelationKey = keyof EmpresaRelations;
