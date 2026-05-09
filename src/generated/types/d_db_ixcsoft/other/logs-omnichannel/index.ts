/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type LogsOmnichannel = z.infer<
	typeof import("./schemas").logs_omnichannelSchema
>;
export type LogsOmnichannelRelations = Record<string, never>;

export type LogsOmnichannelRelationKey = keyof LogsOmnichannelRelations;
