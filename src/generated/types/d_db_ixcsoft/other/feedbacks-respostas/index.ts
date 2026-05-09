/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FeedbacksRespostas = z.infer<
	typeof import("./schemas").feedbacks_respostasSchema
>;
export type FeedbacksRespostasRelations = Record<string, never>;

export type FeedbacksRespostasRelationKey = keyof FeedbacksRespostasRelations;
