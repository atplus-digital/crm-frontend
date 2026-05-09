/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteContratoModeloLista = z.infer<
	typeof import("./schemas").cliente_contrato_modelo_listaSchema
>;
export type ClienteContratoModeloListaRelations = Record<string, never>;

export type ClienteContratoModeloListaRelationKey =
	keyof ClienteContratoModeloListaRelations;
