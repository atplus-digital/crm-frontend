/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type BackupGrupoDrive = z.infer<
	typeof import("./schemas").backup_grupo_driveSchema
>;
export type BackupGrupoDriveRelations = Record<string, never>;

export type BackupGrupoDriveRelationKey = keyof BackupGrupoDriveRelations;
