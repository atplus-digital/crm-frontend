/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type WizardOsPatrimonioAssunto = z.infer<
	typeof import("./schemas").wizard_os_patrimonio_assuntoSchema
>;
export type WizardOsPatrimonioAssuntoRelations = Record<string, never>;

export type WizardOsPatrimonioAssuntoRelationKey =
	keyof WizardOsPatrimonioAssuntoRelations;
