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
export type RelatoriosResponsavelCancelNegatDesist = z.infer<
	typeof import("./schemas").relatorios_responsavel_cancel_negat_desistSchema
>;
export type RelatoriosResponsavelCancelNegatDesistRelations = Record<
	string,
	never
>;

export type RelatoriosResponsavelCancelNegatDesistRelationKey =
	keyof RelatoriosResponsavelCancelNegatDesistRelations;
