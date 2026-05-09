/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PatrimonioTransferido = z.infer<
	typeof import("./schemas").patrimonio_transferidoSchema
>;
export type PatrimonioTransferidoRelations = Record<string, never>;

export type PatrimonioTransferidoRelationKey =
	keyof PatrimonioTransferidoRelations;
