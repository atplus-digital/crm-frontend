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
export type OmnichannelMarketing = z.infer<
	typeof import("./schemas").omnichannel_marketingSchema
>;
export type OmnichannelMarketingRelations = Record<string, never>;

export type OmnichannelMarketingRelationKey =
	keyof OmnichannelMarketingRelations;
