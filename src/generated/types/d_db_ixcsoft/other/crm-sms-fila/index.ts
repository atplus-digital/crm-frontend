/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmSmsFila = z.infer<typeof import("./schemas").crm_sms_filaSchema>;
export type CrmSmsFilaRelations = Record<string, never>;

export type CrmSmsFilaRelationKey = keyof CrmSmsFilaRelations;
