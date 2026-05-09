/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CnfCfopEntrada = z.infer<
	typeof import("./schemas").cnf_cfop_entradaSchema
>;
export type CnfCfopEntradaRelations = Record<string, never>;

export type CnfCfopEntradaRelationKey = keyof CnfCfopEntradaRelations;
