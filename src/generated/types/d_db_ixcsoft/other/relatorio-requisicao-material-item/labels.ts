/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
