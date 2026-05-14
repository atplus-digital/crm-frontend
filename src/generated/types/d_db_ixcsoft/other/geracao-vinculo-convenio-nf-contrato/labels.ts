/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOVINCULOCONVENIONFCONTRATO_FIELD_LABELS = {
	data_final_geracao: "data_final_geracao",
	data_geracao: "data_geracao",
	data_inicial_geracao: "data_inicial_geracao",
	desc_filtro_geracao: "desc_filtro_geracao",
	filial_id: "filial_id",
	id: "id",
	status_execucao_lote: "status_execucao_lote",
	status_geracao_lote: "status_geracao_lote",
	tipo_cobranca: "tipo_cobranca",
	total_registros_vinculados: "total_registros_vinculados",
	vencimento_final_financeiro: "vencimento_final_financeiro",
	vencimento_inicial_financeiro: "vencimento_inicial_financeiro",
} as const;

export const GERACAOVINCULOCONVENIONFCONTRATO_TIPOCOBRANCA_LABELS = {
	Pos: "Pos",
	Pre: "Pre",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_vinculo_convenio_nf_contratoTipoCobrancaSchema = z.enum(
	["Pos", "Pre", "P"],
	{
		error: () => ({
			message: "tipo_cobranca: valores válidos são [Pos, Pre, P]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoVinculoConvenioNfContratoTipoCobranca = z.infer<
	typeof geracao_vinculo_convenio_nf_contratoTipoCobrancaSchema
>;
