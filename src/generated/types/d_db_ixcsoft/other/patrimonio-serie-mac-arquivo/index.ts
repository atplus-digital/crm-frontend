/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PatrimonioSerieMacArquivo = z.infer<
	typeof import("./schemas").patrimonio_serie_mac_arquivoSchema
>;
export type PatrimonioSerieMacArquivoRelations = Record<string, never>;

export type PatrimonioSerieMacArquivoRelationKey =
	keyof PatrimonioSerieMacArquivoRelations;
