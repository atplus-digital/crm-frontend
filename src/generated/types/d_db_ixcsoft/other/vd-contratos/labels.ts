/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VDCONTRATOS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDCONTRATOS_BASEGERACAOPORTIPODOC_LABELS = {
	OPC: "OPC",
	PROD: "PROD",
	P: "P",
} as const;

export const VDCONTRATOS_LIMITARNLOGINS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDCONTRATOS_MOSTRARNAVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDCONTRATOS_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
} as const;

export const VDCONTRATOS_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	E: "E",
	T: "T",
} as const;

export const VDCONTRATOS_UTILIZARDESCONTOATEVENCIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDCONTRATOS_UTILIZARDESCONTONOPRODUTOPLANO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDCONTRATOS_UTILIZARDESCONTOPORREPETICAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const vd_contratosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "Ativo: valores válidos são [S, N]" }),
});

export const vd_contratosBaseGeracaoPorTipoDocSchema = z.enum(
	["OPC", "PROD", "P"],
	{
		error: () => ({
			message: "base_geracao_por_tipo_doc: valores válidos são [OPC, PROD, P]",
		}),
	},
);

export const vd_contratosLimitarNLoginsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "limitar_n_logins: valores válidos são [S, N]" }),
});

export const vd_contratosMostrarNaViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_na_viabilidade: valores válidos são [S, N]",
	}),
});

export const vd_contratosTipoSchema = z.enum(["I", "T", "S", "SVA"], {
	error: () => ({ message: "tipo: valores válidos são [I, T, S, SVA]" }),
});

export const vd_contratosTipoPessoaSchema = z.enum(["F", "J", "E", "T"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, E, T]" }),
});

export const vd_contratosUtilizarDescontoAteVencimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utilizar_desconto_ate_vencimento: valores válidos são [S, N]",
		}),
	},
);

export const vd_contratosUtilizarDescontoNoProdutoPlanoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utilizar_desconto_no_produto_plano: valores válidos são [S, N]",
		}),
	},
);

export const vd_contratosUtilizarDescontoPorRepeticaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utilizar_desconto_por_repeticao: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VdContratosAtivo = z.infer<typeof vd_contratosAtivoSchema>;

export type VdContratosBaseGeracaoPorTipoDoc = z.infer<
	typeof vd_contratosBaseGeracaoPorTipoDocSchema
>;

export type VdContratosLimitarNLogins = z.infer<
	typeof vd_contratosLimitarNLoginsSchema
>;

export type VdContratosMostrarNaViabilidade = z.infer<
	typeof vd_contratosMostrarNaViabilidadeSchema
>;

export type VdContratosTipo = z.infer<typeof vd_contratosTipoSchema>;

export type VdContratosTipoPessoa = z.infer<
	typeof vd_contratosTipoPessoaSchema
>;

export type VdContratosUtilizarDescontoAteVencimento = z.infer<
	typeof vd_contratosUtilizarDescontoAteVencimentoSchema
>;

export type VdContratosUtilizarDescontoNoProdutoPlano = z.infer<
	typeof vd_contratosUtilizarDescontoNoProdutoPlanoSchema
>;

export type VdContratosUtilizarDescontoPorRepeticao = z.infer<
	typeof vd_contratosUtilizarDescontoPorRepeticaoSchema
>;
