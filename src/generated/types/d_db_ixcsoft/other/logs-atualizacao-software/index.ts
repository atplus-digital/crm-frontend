/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogsAtualizacaoSoftware = z.infer<
	typeof import("./schemas").logs_atualizacao_softwareSchema
>;
export type LogsAtualizacaoSoftwareRelations = Record<string, never>;

export type LogsAtualizacaoSoftwareRelationKey =
	keyof LogsAtualizacaoSoftwareRelations;
