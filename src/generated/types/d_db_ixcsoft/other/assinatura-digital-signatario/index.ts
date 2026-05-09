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
export type AssinaturaDigitalSignatario = z.infer<
	typeof import("./schemas").assinatura_digital_signatarioSchema
>;
export type AssinaturaDigitalSignatarioRelations = Record<string, never>;

export type AssinaturaDigitalSignatarioRelationKey =
	keyof AssinaturaDigitalSignatarioRelations;
