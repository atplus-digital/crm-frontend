/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONTATO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_CADASTROSITE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_EMAILATENDIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_LEAD_LABELS = {
	N: "N",
	S: "S",
} as const;

export const CONTATO_LID_LABELS = {
	N: "N",
	S: "S",
} as const;

export const CONTATO_MORADIA_LABELS = {
	P: "P",
	A: "A",
} as const;

export const CONTATO_PRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_STATUSVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTATO_TIPODOCUMENTOIDENTIFICACAOCOL_LABELS = {
	11: "11",
	12: "12",
	13: "13",
	21: "21",
	22: "22",
	31: "31",
	41: "41",
	42: "42",
	47: "47",
	50: "50",
	91: "91",
	CI: "CI",
	RUC: "RUC",
	NUIT: "NUIT",
} as const;

export const CONTATO_TIPOLOCALIDADE_LABELS = {
	R: "R",
	U: "U",
} as const;

export const CONTATO_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	E: "E",
} as const;

export const CONTATO_TIPOREDE_LABELS = {
	P: "P",
	N: "N",
	A: "A",
} as const;

export const CONTATO_VINCULARCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const contatoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const contatoCadastroSiteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cadastro_site: valores válidos são [S, N]" }),
});

export const contatoEmailAtendimentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "email_atendimento: valores válidos são [S, N]" }),
});

export const contatoLeadSchema = z.enum(["N", "S"], {
	error: () => ({ message: "lead: valores válidos são [N, S]" }),
});

export const contatoLidSchema = z.enum(["N", "S"], {
	error: () => ({ message: "lid: valores válidos são [N, S]" }),
});

export const contatoMoradiaSchema = z.enum(["P", "A"], {
	error: () => ({ message: "moradia: valores válidos são [P, A]" }),
});

export const contatoPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "principal: valores válidos são [S, N]" }),
});

export const contatoStatusViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status_viabilidade: valores válidos são [S, N]" }),
});

export const contatoTipoDocumentoIdentificacaoColSchema = z.enum(
	[
		"11",
		"12",
		"13",
		"21",
		"22",
		"31",
		"41",
		"42",
		"47",
		"50",
		"91",
		"CI",
		"RUC",
		"NUIT",
	],
	{
		error: () => ({
			message:
				"tipo_documento_identificacao_col: valores válidos são [11, 12, 13, 21, 22, 31, 41, 42, 47, 50, 91, CI, RUC, NUIT]",
		}),
	},
);

export const contatoTipoLocalidadeSchema = z.enum(["R", "U"], {
	error: () => ({ message: "tipo_localidade: valores válidos são [R, U]" }),
});

export const contatoTipoPessoaSchema = z.enum(["F", "J", "E"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, E]" }),
});

export const contatoTipoRedeSchema = z.enum(["P", "N", "A"], {
	error: () => ({ message: "tipo_rede: valores válidos são [P, N, A]" }),
});

export const contatoVincularContratoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "vincular_contrato: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ContatoAtivo = z.infer<typeof contatoAtivoSchema>;

export type ContatoCadastroSite = z.infer<typeof contatoCadastroSiteSchema>;

export type ContatoEmailAtendimento = z.infer<
	typeof contatoEmailAtendimentoSchema
>;

export type ContatoLead = z.infer<typeof contatoLeadSchema>;

export type ContatoLid = z.infer<typeof contatoLidSchema>;

export type ContatoMoradia = z.infer<typeof contatoMoradiaSchema>;

export type ContatoPrincipal = z.infer<typeof contatoPrincipalSchema>;

export type ContatoStatusViabilidade = z.infer<
	typeof contatoStatusViabilidadeSchema
>;

export type ContatoTipoDocumentoIdentificacaoCol = z.infer<
	typeof contatoTipoDocumentoIdentificacaoColSchema
>;

export type ContatoTipoLocalidade = z.infer<typeof contatoTipoLocalidadeSchema>;

export type ContatoTipoPessoa = z.infer<typeof contatoTipoPessoaSchema>;

export type ContatoTipoRede = z.infer<typeof contatoTipoRedeSchema>;

export type ContatoVincularContrato = z.infer<
	typeof contatoVincularContratoSchema
>;
