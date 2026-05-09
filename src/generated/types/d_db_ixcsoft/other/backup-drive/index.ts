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
export type BackupDrive = z.infer<
	typeof import("./schemas").backup_driveSchema
>;
export type BackupDriveRelations = Record<string, never>;

export type BackupDriveRelationKey = keyof BackupDriveRelations;
