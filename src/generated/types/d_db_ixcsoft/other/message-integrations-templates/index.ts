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
export type MessageIntegrationsTemplates = z.infer<
	typeof import("./schemas").message_integrations_templatesSchema
>;
export type MessageIntegrationsTemplatesRelations = Record<string, never>;

export type MessageIntegrationsTemplatesRelationKey =
	keyof MessageIntegrationsTemplatesRelations;
