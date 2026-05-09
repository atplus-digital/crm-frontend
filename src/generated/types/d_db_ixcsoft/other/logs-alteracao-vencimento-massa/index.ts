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
export type LogsAlteracaoVencimentoMassa = z.infer<
	typeof import("./schemas").logs_alteracao_vencimento_massaSchema
>;
export type LogsAlteracaoVencimentoMassaRelations = Record<string, never>;

export type LogsAlteracaoVencimentoMassaRelationKey =
	keyof LogsAlteracaoVencimentoMassaRelations;
