/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type WizardOsPatrimonio = z.infer<
	typeof import("./schemas").wizard_os_patrimonioSchema
>;
export type WizardOsPatrimonioRelations = Record<string, never>;

export type WizardOsPatrimonioRelationKey = keyof WizardOsPatrimonioRelations;
