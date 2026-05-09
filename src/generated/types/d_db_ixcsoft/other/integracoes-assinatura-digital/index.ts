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
export type IntegracoesAssinaturaDigital = z.infer<
	typeof import("./schemas").integracoes_assinatura_digitalSchema
>;
export type IntegracoesAssinaturaDigitalRelations = Record<string, never>;

export type IntegracoesAssinaturaDigitalRelationKey =
	keyof IntegracoesAssinaturaDigitalRelations;
