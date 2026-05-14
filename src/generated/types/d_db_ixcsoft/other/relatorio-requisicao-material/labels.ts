/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOREQUISICAOMATERIAL_FIELD_LABELS = {
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_abertura_final: "data_abertura_final",
	data_abertura_inicial: "data_abertura_inicial",
	data_abertura_periodo: "data_abertura_periodo",
	data_cancela_final: "data_cancela_final",
	data_cancela_inicial: "data_cancela_inicial",
	data_cancela_periodo: "data_cancela_periodo",
	data_confirma_final: "data_confirma_final",
	data_confirma_inicial: "data_confirma_inicial",
	data_confirma_periodo: "data_confirma_periodo",
	data_ultima_impres: "data_ultima_impres",
	id: "id",
	id_almox: "id_almox",
	id_filial: "id_filial",
	id_mot_cancelamento: "id_mot_cancelamento",
	id_requisicao: "id_requisicao",
	id_requsicao: "id_requsicao",
	id_tecnico: "id_tecnico",
	id_tecnico_confirma: "id_tecnico_confirma",
	id_usuario_cancelamento: "id_usuario_cancelamento",
	id_usuario_confirma: "id_usuario_confirma",
	impresso_por: "impresso_por",
	nome: "nome",
	relatorio: "relatorio",
	tipo_data_abertura: "tipo_data_abertura",
	tipo_data_cancela: "tipo_data_cancela",
	tipo_data_confirma: "tipo_data_confirma",
} as const;

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
