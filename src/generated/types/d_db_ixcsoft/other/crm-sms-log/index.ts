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
export type CrmSmsLog = z.infer<typeof import("./schemas").crm_sms_logSchema>;
export type CrmSmsLogRelations = Record<string, never>;

export type CrmSmsLogRelationKey = keyof CrmSmsLogRelations;
