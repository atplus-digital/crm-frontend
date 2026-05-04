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
export type DadosAdicionaisClienteContrato = z.infer<
	typeof import("./schemas").dados_adicionais_cliente_contratoSchema
>;
export type DadosAdicionaisClienteContratoRelations = z.infer<
	typeof import("./schemas").dados_adicionais_cliente_contratoRelationSchema
>;

export type DadosAdicionaisClienteContratoRelationKey =
	keyof DadosAdicionaisClienteContratoRelations;
