/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TipoRelacionamentoContato = z.infer<
	typeof import("./schemas").tipo_relacionamento_contatoSchema
>;
export type TipoRelacionamentoContatoRelations = Record<string, never>;

export type TipoRelacionamentoContatoRelationKey =
	keyof TipoRelacionamentoContatoRelations;
