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
export type RelatorioFuncionarioEquipamento = z.infer<
	typeof import("./schemas").relatorio_funcionario_equipamentoSchema
>;
export type RelatorioFuncionarioEquipamentoRelations = Record<string, never>;

export type RelatorioFuncionarioEquipamentoRelationKey =
	keyof RelatorioFuncionarioEquipamentoRelations;
