/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SVAUSUARIOS_FIELD_LABELS = {
	autenticacao: "autenticacao",
	cnpj_cpf: "cnpj_cpf",
	created_at: "created_at",
	criado_em: "criado_em",
	id: "id",
	id_contrato: "id_contrato",
	id_integracao: "id_integracao",
	id_produto_contrato: "id_produto_contrato",
	msisdn: "msisdn",
	quantidade_dispositivos: "quantidade_dispositivos",
	redirect_url: "redirect_url",
	senha: "senha",
	status_integracao: "status_integracao",
	sub_dominio: "sub_dominio",
	subscription_id: "subscription_id",
	tipo_comunicacao: "tipo_comunicacao",
	tipo_dispositivo: "tipo_dispositivo",
	usar_email: "usar_email",
	user: "user",
	user_id: "user_id",
	usuarios_adicionais: "usuarios_adicionais",
} as const;

export const SVAUSUARIOS_AUTENTICACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SVAUSUARIOS_STATUSINTEGRACAO_LABELS = {
	A: "A",
	B: "B",
	D: "D",
} as const;

export const SVAUSUARIOS_TIPOCOMUNICACAO_LABELS = {
	E: "E",
	M: "M",
	A: "A",
} as const;

export const SVAUSUARIOS_USAREMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sva_usuariosAutenticacaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "autenticacao: valores válidos são [S, N]" }),
});

export const sva_usuariosStatusIntegracaoSchema = z.enum(["A", "B", "D"], {
	error: () => ({
		message: "status_integracao: valores válidos são [A, B, D]",
	}),
});

export const sva_usuariosTipoComunicacaoSchema = z.enum(["E", "M", "A"], {
	error: () => ({ message: "tipo_comunicacao: valores válidos são [E, M, A]" }),
});

export const sva_usuariosUsarEmailSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usar_email: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SvaUsuariosAutenticacao = z.infer<
	typeof sva_usuariosAutenticacaoSchema
>;

export type SvaUsuariosStatusIntegracao = z.infer<
	typeof sva_usuariosStatusIntegracaoSchema
>;

export type SvaUsuariosTipoComunicacao = z.infer<
	typeof sva_usuariosTipoComunicacaoSchema
>;

export type SvaUsuariosUsarEmail = z.infer<typeof sva_usuariosUsarEmailSchema>;
