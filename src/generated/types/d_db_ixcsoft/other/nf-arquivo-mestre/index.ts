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
export type NfArquivoMestre = z.infer<
	typeof import("./schemas").nf_arquivo_mestreSchema
>;
export type NfArquivoMestreRelations = Record<string, never>;

export type NfArquivoMestreRelationKey = keyof NfArquivoMestreRelations;
