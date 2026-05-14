/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWVDCONTRATOSPRODUTOSGEN_FIELD_LABELS = {
	cliente_contrato_id: "cliente_contrato_id",
	descricao: "descricao",
	id: "id",
	id_contrato: "id_contrato",
	id_plano: "id_plano",
	id_produto: "id_produto",
	id_tipo_documento: "id_tipo_documento",
	id_unidade: "id_unidade",
	id_vd_contrato: "id_vd_contrato",
	logins_simultaneos: "logins_simultaneos",
	qtde: "qtde",
	tipo: "tipo",
	tipo_produtos_plano: "tipo_produtos_plano",
	valor_acrescimo: "valor_acrescimo",
	valor_ate_vencimento: "valor_ate_vencimento",
	valor_bruto: "valor_bruto",
	valor_desconto: "valor_desconto",
	valor_liquido: "valor_liquido",
	valor_unit: "valor_unit",
} as const;

export const VIEWVDCONTRATOSPRODUTOSGEN_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_vd_contratos_produtos_genTipoSchema = z.enum(
	["I", "T", "S", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, SVA, TV, SMP]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewVdContratosProdutosGenTipo = z.infer<
	typeof view_vd_contratos_produtos_genTipoSchema
>;
