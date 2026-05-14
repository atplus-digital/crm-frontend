/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOREQUISICAOMATERIALITEM_FIELD_LABELS = {
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_cancelamento_final: "data_cancelamento_final",
	data_cancelamento_inicial: "data_cancelamento_inicial",
	data_cancelamento_periodo: "data_cancelamento_periodo",
	data_final: "data_final",
	data_inicial: "data_inicial",
	data_periodo: "data_periodo",
	data_ultima_impres: "data_ultima_impres",
	id: "id",
	id_almox: "id_almox",
	id_produto: "id_produto",
	id_requisicao: "id_requisicao",
	id_tecnico: "id_tecnico",
	impresso_por: "impresso_por",
	nome: "nome",
	relatorio: "relatorio",
	tipo_data: "tipo_data",
	tipo_data_cancelamento: "tipo_data_cancelamento",
} as const;

export const RELATORIOREQUISICAOMATERIALITEM_TIPODATA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOREQUISICAOMATERIALITEM_TIPODATACANCELAMENTO_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_requisicao_material_itemTipoDataSchema = z.enum(
	["D", "P"],
	{
		error: () => ({ message: "tipo_data: valores válidos são [D, P]" }),
	},
);

export const relatorio_requisicao_material_itemTipoDataCancelamentoSchema =
	z.enum(["D", "P"], {
		error: () => ({
			message: "tipo_data_cancelamento: valores válidos são [D, P]",
		}),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioRequisicaoMaterialItemTipoData = z.infer<
	typeof relatorio_requisicao_material_itemTipoDataSchema
>;

export type RelatorioRequisicaoMaterialItemTipoDataCancelamento = z.infer<
	typeof relatorio_requisicao_material_itemTipoDataCancelamentoSchema
>;
