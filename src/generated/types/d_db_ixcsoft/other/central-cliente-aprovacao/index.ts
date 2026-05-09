/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CentralClienteAprovacao = z.infer<
	typeof import("./schemas").central_cliente_aprovacaoSchema
>;
export type CentralClienteAprovacaoRelations = Record<string, never>;

export type CentralClienteAprovacaoRelationKey =
	keyof CentralClienteAprovacaoRelations;
