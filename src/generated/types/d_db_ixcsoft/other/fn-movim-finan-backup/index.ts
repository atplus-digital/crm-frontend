/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnMovimFinanBackup = z.infer<
	typeof import("./schemas").fn_movim_finan_backupSchema
>;
export type FnMovimFinanBackupRelations = Record<string, never>;

export type FnMovimFinanBackupRelationKey = keyof FnMovimFinanBackupRelations;
