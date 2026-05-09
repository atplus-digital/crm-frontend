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
export type ListarBackupsDrive = z.infer<
	typeof import("./schemas").listar_backups_driveSchema
>;
export type ListarBackupsDriveRelations = Record<string, never>;

export type ListarBackupsDriveRelationKey = keyof ListarBackupsDriveRelations;
