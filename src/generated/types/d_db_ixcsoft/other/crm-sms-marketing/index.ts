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
export type CrmSmsMarketing = z.infer<
	typeof import("./schemas").crm_sms_marketingSchema
>;
export type CrmSmsMarketingRelations = Record<string, never>;

export type CrmSmsMarketingRelationKey = keyof CrmSmsMarketingRelations;
