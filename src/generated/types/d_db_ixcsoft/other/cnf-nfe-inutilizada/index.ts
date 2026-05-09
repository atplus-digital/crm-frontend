/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CnfNfeInutilizada = z.infer<
	typeof import("./schemas").cnf_nfe_inutilizadaSchema
>;
export type CnfNfeInutilizadaRelations = Record<string, never>;

export type CnfNfeInutilizadaRelationKey = keyof CnfNfeInutilizadaRelations;
