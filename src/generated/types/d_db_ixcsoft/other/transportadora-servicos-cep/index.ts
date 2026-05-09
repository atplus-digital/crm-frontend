/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TransportadoraServicosCep = z.infer<
	typeof import("./schemas").transportadora_servicos_cepSchema
>;
export type TransportadoraServicosCepRelations = Record<string, never>;

export type TransportadoraServicosCepRelationKey =
	keyof TransportadoraServicosCepRelations;
