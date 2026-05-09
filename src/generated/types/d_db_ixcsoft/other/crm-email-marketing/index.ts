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
export type CrmEmailMarketing = z.infer<
	typeof import("./schemas").crm_email_marketingSchema
>;
export type CrmEmailMarketingRelations = Record<string, never>;

export type CrmEmailMarketingRelationKey = keyof CrmEmailMarketingRelations;
