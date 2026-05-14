/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TABELACODCLASSIFICAOTRIBCBSIBS_FIELD_LABELS = {
	class_trib: "class_trib",
	cst_ibs_cbs: "cst_ibs_cbs",
	descricao_class_trib: "descricao_class_trib",
	descricao_cst_ibs_cbs: "descricao_cst_ibs_cbs",
	id: "id",
	percent_reducao: "percent_reducao",
	reforma_trib: "reforma_trib",
	tipo_aliquota: "tipo_aliquota",
} as const;

export const TABELACODCLASSIFICAOTRIBCBSIBS_TIPOALIQUOTA_LABELS = {
	P: "P",
	SA: "SA",
	US: "US",
	UN: "UN",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tabela_cod_classificao_trib_cbs_ibsTipoAliquotaSchema = z.enum(
	["P", "SA", "US", "UN", "F"],
	{
		error: () => ({
			message: "tipo_aliquota: valores válidos são [P, SA, US, UN, F]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TabelaCodClassificaoTribCbsIbsTipoAliquota = z.infer<
	typeof tabela_cod_classificao_trib_cbs_ibsTipoAliquotaSchema
>;
