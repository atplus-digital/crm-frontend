/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADDICIITEM_FIELD_LABELS = {
	cidade: "cidade",
	data_cancelamento: "data_cancelamento",
	data_emissao: "data_emissao",
	dici_velocidade: "dici_velocidade",
	id: "id",
	id_plano: "id_plano",
	id_rad_dici: "id_rad_dici",
	id_tipo_documento: "id_tipo_documento",
	modelo_nf: "modelo_nf",
	nome_plano: "nome_plano",
	qtd_acessos: "qtd_acessos",
	tecnologia: "tecnologia",
	tipo_atendimento: "tipo_atendimento",
	tipo_cliente: "tipo_cliente",
	tipo_meio_acesso: "tipo_meio_acesso",
	tipo_produto: "tipo_produto",
	velocidade: "velocidade",
} as const;

export const RADDICIITEM_TIPOATENDIMENTO_LABELS = {
	R: "R",
	U: "U",
} as const;

export const RADDICIITEM_TIPOCLIENTE_LABELS = {
	F: "F",
	J: "J",
	P: "P",
} as const;

export const RADDICIITEM_TIPOMEIOACESSO_LABELS = {
	58: "58",
	24: "24",
	F: "F",
	L: "L",
	A: "A",
	NU: "NU",
	LDD: "LDD",
} as const;

export const RADDICIITEM_TIPOPRODUTO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
	NU: "NU",
	HDSL: "HDSL",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_dici_itemTipoAtendimentoSchema = z.enum(["R", "U"], {
	error: () => ({ message: "tipo_atendimento: valores válidos são [R, U]" }),
});

export const rad_dici_itemTipoClienteSchema = z.enum(["F", "J", "P"], {
	error: () => ({ message: "tipo_cliente: valores válidos são [F, J, P]" }),
});

export const rad_dici_itemTipoMeioAcessoSchema = z.enum(
	["58", "24", "F", "L", "A", "NU", "LDD"],
	{
		error: () => ({
			message:
				"tipo_meio_acesso: valores válidos são [58, 24, F, L, A, NU, LDD]",
		}),
	},
);

export const rad_dici_itemTipoProdutoSchema = z.enum(
	["I", "T", "S", "SVA", "NU", "HDSL"],
	{
		error: () => ({
			message: "tipo_produto: valores válidos são [I, T, S, SVA, NU, HDSL]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadDiciItemTipoAtendimento = z.infer<
	typeof rad_dici_itemTipoAtendimentoSchema
>;

export type RadDiciItemTipoCliente = z.infer<
	typeof rad_dici_itemTipoClienteSchema
>;

export type RadDiciItemTipoMeioAcesso = z.infer<
	typeof rad_dici_itemTipoMeioAcessoSchema
>;

export type RadDiciItemTipoProduto = z.infer<
	typeof rad_dici_itemTipoProdutoSchema
>;
