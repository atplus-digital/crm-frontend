/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuAtendimentoStatus = z.infer<
	typeof import("./schemas").su_atendimento_statusSchema
>;
export type SuAtendimentoStatusRelations = Record<string, never>;

export type SuAtendimentoStatusRelationKey = keyof SuAtendimentoStatusRelations;
