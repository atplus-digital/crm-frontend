/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmTelegramMarketing = z.infer<
	typeof import("./schemas").crm_telegram_marketingSchema
>;
export type CrmTelegramMarketingRelations = Record<string, never>;

export type CrmTelegramMarketingRelationKey =
	keyof CrmTelegramMarketingRelations;
