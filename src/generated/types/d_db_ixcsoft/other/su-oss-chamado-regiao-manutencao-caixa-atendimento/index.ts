/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SuOssChamadoRegiaoManutencaoCaixaAtendimento = z.infer<
	typeof import("./schemas").su_oss_chamado_regiao_manutencao_caixa_atendimentoSchema
>;
export type SuOssChamadoRegiaoManutencaoCaixaAtendimentoRelations = Record<
	string,
	never
>;

export type SuOssChamadoRegiaoManutencaoCaixaAtendimentoRelationKey =
	keyof SuOssChamadoRegiaoManutencaoCaixaAtendimentoRelations;
