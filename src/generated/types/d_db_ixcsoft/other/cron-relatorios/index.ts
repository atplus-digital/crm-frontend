/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CronRelatorios = z.infer<
	typeof import("./schemas").cron_relatoriosSchema
>;
export type CronRelatoriosRelations = Record<string, never>;

export type CronRelatoriosRelationKey = keyof CronRelatoriosRelations;
