/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type WizardOsPatrimonioComodato = z.infer<
	typeof import("./schemas").wizard_os_patrimonio_comodatoSchema
>;
export type WizardOsPatrimonioComodatoRelations = Record<string, never>;

export type WizardOsPatrimonioComodatoRelationKey =
	keyof WizardOsPatrimonioComodatoRelations;
