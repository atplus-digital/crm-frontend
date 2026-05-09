/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PatrimonioMotivoInutilizacao = z.infer<
	typeof import("./schemas").patrimonio_motivo_inutilizacaoSchema
>;
export type PatrimonioMotivoInutilizacaoRelations = Record<string, never>;

export type PatrimonioMotivoInutilizacaoRelationKey =
	keyof PatrimonioMotivoInutilizacaoRelations;
