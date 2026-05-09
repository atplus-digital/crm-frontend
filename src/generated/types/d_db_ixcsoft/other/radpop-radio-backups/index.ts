/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadpopRadioBackups = z.infer<
	typeof import("./schemas").radpop_radio_backupsSchema
>;
export type RadpopRadioBackupsRelations = Record<string, never>;

export type RadpopRadioBackupsRelationKey = keyof RadpopRadioBackupsRelations;
