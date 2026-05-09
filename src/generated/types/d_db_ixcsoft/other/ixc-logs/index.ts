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
export type IxcLogs = z.infer<typeof import("./schemas").ixc_logsSchema>;
export type IxcLogsRelations = Record<string, never>;

export type IxcLogsRelationKey = keyof IxcLogsRelations;
