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
export type RotinaImportacaoServicosAdicionaisDados = z.infer<
	typeof import("./schemas").rotina_importacao_servicos_adicionais_dadosSchema
>;
export type RotinaImportacaoServicosAdicionaisDadosRelations = Record<
	string,
	never
>;

export type RotinaImportacaoServicosAdicionaisDadosRelationKey =
	keyof RotinaImportacaoServicosAdicionaisDadosRelations;
