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
export type FnAreceberBackup = z.infer<
	typeof import("./schemas").fn_areceber_backupSchema
>;
export type FnAreceberBackupRelations = Record<string, never>;

export type FnAreceberBackupRelationKey = keyof FnAreceberBackupRelations;
