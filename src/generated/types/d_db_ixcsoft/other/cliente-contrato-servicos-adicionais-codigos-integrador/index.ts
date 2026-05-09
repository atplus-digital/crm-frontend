/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteContratoServicosAdicionaisCodigosIntegrador = z.infer<
	typeof import("./schemas").cliente_contrato_servicos_adicionais_codigos_integradorSchema
>;
export type ClienteContratoServicosAdicionaisCodigosIntegradorRelations =
	Record<string, never>;

export type ClienteContratoServicosAdicionaisCodigosIntegradorRelationKey =
	keyof ClienteContratoServicosAdicionaisCodigosIntegradorRelations;
