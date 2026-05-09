/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteContratoDescRetroativosParam = z.infer<
	typeof import("./schemas").cliente_contrato_desc_retroativos_paramSchema
>;
export type ClienteContratoDescRetroativosParamRelations = Record<
	string,
	never
>;

export type ClienteContratoDescRetroativosParamRelationKey =
	keyof ClienteContratoDescRetroativosParamRelations;
