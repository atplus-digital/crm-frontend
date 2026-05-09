/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CnfTratamentoTributario = z.infer<
	typeof import("./schemas").cnf_tratamento_tributarioSchema
>;
export type CnfTratamentoTributarioRelations = Record<string, never>;

export type CnfTratamentoTributarioRelationKey =
	keyof CnfTratamentoTributarioRelations;
