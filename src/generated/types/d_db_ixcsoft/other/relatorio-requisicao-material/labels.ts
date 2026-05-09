/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOREQUISICAOMATERIAL_TIPODATAABERTURA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOREQUISICAOMATERIAL_TIPODATACANCELA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOREQUISICAOMATERIAL_TIPODATACONFIRMA_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_requisicao_materialTipoDataAberturaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_abertura: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_requisicao_materialTipoDataCancelaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({ message: "tipo_data_cancela: valores válidos são [D, P]" }),
	},
);

export const relatorio_requisicao_materialTipoDataConfirmaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_confirma: valores válidos são [D, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioRequisicaoMaterialTipoDataAbertura = z.infer<
	typeof relatorio_requisicao_materialTipoDataAberturaSchema
>;

export type RelatorioRequisicaoMaterialTipoDataCancela = z.infer<
	typeof relatorio_requisicao_materialTipoDataCancelaSchema
>;

export type RelatorioRequisicaoMaterialTipoDataConfirma = z.infer<
	typeof relatorio_requisicao_materialTipoDataConfirmaSchema
>;
