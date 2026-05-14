/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADDICISEACITEM_FIELD_LABELS = {
	cidade: "cidade",
	data_cancelamento: "data_cancelamento",
	data_emissao: "data_emissao",
	id: "id",
	id_cliente_contrato: "id_cliente_contrato",
	id_rad_dici_seac: "id_rad_dici_seac",
	id_tipo_documento: "id_tipo_documento",
	mdoelo_nf: "mdoelo_nf",
	modelo_nf: "modelo_nf",
	numero_nf: "numero_nf",
	qtd_acessos: "qtd_acessos",
	tecnologia: "tecnologia",
	tipo_atendimento: "tipo_atendimento",
	tipo_cliente: "tipo_cliente",
	tipo_meio_acesso: "tipo_meio_acesso",
	tipo_produto: "tipo_produto",
	type_connection_tv: "type_connection_tv",
} as const;

export const RADDICISEACITEM_TIPOATENDIMENTO_LABELS = {
	R: "R",
	U: "U",
} as const;

export const RADDICISEACITEM_TIPOCLIENTE_LABELS = {
	F: "F",
	J: "J",
	P: "P",
} as const;

export const RADDICISEACITEM_TIPOMEIOACESSO_LABELS = {
	58: "58",
	24: "24",
	F: "F",
	L: "L",
	A: "A",
	NU: "NU",
} as const;

export const RADDICISEACITEM_TIPOPRODUTO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
	NU: "NU",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_dici_seac_itemTipoAtendimentoSchema = z.enum(["R", "U"], {
	error: () => ({ message: "tipo_atendimento: valores válidos são [R, U]" }),
});

export const rad_dici_seac_itemTipoClienteSchema = z.enum(["F", "J", "P"], {
	error: () => ({ message: "tipo_cliente: valores válidos são [F, J, P]" }),
});

export const rad_dici_seac_itemTipoMeioAcessoSchema = z.enum(
	["58", "24", "F", "L", "A", "NU"],
	{
		error: () => ({
			message: "tipo_meio_acesso: valores válidos são [58, 24, F, L, A, NU]",
		}),
	},
);

export const rad_dici_seac_itemTipoProdutoSchema = z.enum(
	["I", "T", "S", "SVA", "NU"],
	{
		error: () => ({
			message: "tipo_produto: valores válidos são [I, T, S, SVA, NU]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadDiciSeacItemTipoAtendimento = z.infer<
	typeof rad_dici_seac_itemTipoAtendimentoSchema
>;

export type RadDiciSeacItemTipoCliente = z.infer<
	typeof rad_dici_seac_itemTipoClienteSchema
>;

export type RadDiciSeacItemTipoMeioAcesso = z.infer<
	typeof rad_dici_seac_itemTipoMeioAcessoSchema
>;

export type RadDiciSeacItemTipoProduto = z.infer<
	typeof rad_dici_seac_itemTipoProdutoSchema
>;
