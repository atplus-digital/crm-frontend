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
export type PatrimonioInutilizadoArquivoWiz = z.infer<
	typeof import("./schemas").patrimonio_inutilizado_arquivo_wizSchema
>;
export type PatrimonioInutilizadoArquivoWizRelations = Record<string, never>;

export type PatrimonioInutilizadoArquivoWizRelationKey =
	keyof PatrimonioInutilizadoArquivoWizRelations;
