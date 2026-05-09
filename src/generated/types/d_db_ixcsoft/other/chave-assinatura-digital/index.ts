/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ChaveAssinaturaDigital = z.infer<
	typeof import("./schemas").chave_assinatura_digitalSchema
>;
export type ChaveAssinaturaDigitalRelations = Record<string, never>;

export type ChaveAssinaturaDigitalRelationKey =
	keyof ChaveAssinaturaDigitalRelations;
