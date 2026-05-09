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
export type BackupHistorico = z.infer<
	typeof import("./schemas").backup_historicoSchema
>;
export type BackupHistoricoRelations = Record<string, never>;

export type BackupHistoricoRelationKey = keyof BackupHistoricoRelations;
