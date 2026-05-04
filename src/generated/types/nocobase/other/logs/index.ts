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
export type Logs = z.infer<typeof import("./schemas").logsSchema>;
export type LogsRelations = z.infer<
	typeof import("./schemas").logsRelationSchema
>;

export type LogsRelationKey = keyof LogsRelations;
