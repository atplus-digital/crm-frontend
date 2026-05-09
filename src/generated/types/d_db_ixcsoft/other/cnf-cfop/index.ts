/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CnfCfop = z.infer<typeof import("./schemas").cnf_cfopSchema>;
export type CnfCfopRelations = Record<string, never>;

export type CnfCfopRelationKey = keyof CnfCfopRelations;
