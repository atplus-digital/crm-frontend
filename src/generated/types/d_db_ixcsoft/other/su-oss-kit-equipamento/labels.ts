/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUOSSKITEQUIPAMENTO_FIELD_LABELS = {
	adicional_mensalidade: "adicional_mensalidade",
	comodato: "comodato",
	id: "id",
	id_oss_kit: "id_oss_kit",
	id_produto: "id_produto",
	id_su_oss_assunto: "id_su_oss_assunto",
	qtde: "qtde",
	repetir: "repetir",
	repetir_qtde: "repetir_qtde",
	repetir_valor_unit: "repetir_valor_unit",
	tipo_item: "tipo_item",
} as const;

export const SUOSSKITEQUIPAMENTO_ADICIONALMENSALIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSKITEQUIPAMENTO_COMODATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SUOSSKITEQUIPAMENTO_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

export const SUOSSKITEQUIPAMENTO_TIPOITEM_LABELS = {
	C: "C",
	S: "S",
	F: "F",
	M: "M",
	P: "P",
	O: "O",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_oss_kit_equipamentoAdicionalMensalidadeSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "adicional_mensalidade: valores válidos são [S, N]",
		}),
	},
);

export const su_oss_kit_equipamentoComodatoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "comodato: valores válidos são [S, N]" }),
});

export const su_oss_kit_equipamentoRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

export const su_oss_kit_equipamentoTipoItemSchema = z.enum(
	["C", "S", "F", "M", "P", "O"],
	{
		error: () => ({
			message: "tipo_item: valores válidos são [C, S, F, M, P, O]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuOssKitEquipamentoAdicionalMensalidade = z.infer<
	typeof su_oss_kit_equipamentoAdicionalMensalidadeSchema
>;

export type SuOssKitEquipamentoComodato = z.infer<
	typeof su_oss_kit_equipamentoComodatoSchema
>;

export type SuOssKitEquipamentoRepetir = z.infer<
	typeof su_oss_kit_equipamentoRepetirSchema
>;

export type SuOssKitEquipamentoTipoItem = z.infer<
	typeof su_oss_kit_equipamentoTipoItemSchema
>;
