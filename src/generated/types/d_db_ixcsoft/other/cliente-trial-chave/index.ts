/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClienteTrialChave = z.infer<
	typeof import("./schemas").cliente_trial_chaveSchema
>;
export type ClienteTrialChaveRelations = Record<string, never>;

export type ClienteTrialChaveRelationKey = keyof ClienteTrialChaveRelations;
