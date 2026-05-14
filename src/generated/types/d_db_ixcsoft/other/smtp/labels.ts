/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SMTP_FIELD_LABELS = {
	assunto_envio: "assunto_envio",
	autenticacao: "autenticacao",
	bcc_email: "bcc_email",
	codificacao_utf8: "codificacao_utf8",
	conexao_ssl: "conexao_ssl",
	destino_envio: "destino_envio",
	forcar_codificacao: "forcar_codificacao",
	id: "id",
	limite_dia: "limite_dia",
	limite_hora: "limite_hora",
	porta: "porta",
	remetente: "remetente",
	remover_xmailer: "remover_xmailer",
	responsavel_envio: "responsavel_envio",
	senha: "senha",
	servidor_saida: "servidor_saida",
	texto_envio: "texto_envio",
	usuario: "usuario",
} as const;

export const SMTP_AUTENTICACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SMTP_CODIFICACAOUTF8_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SMTP_CONEXAOSSL_LABELS = {
	S: "S",
	T: "T",
	N: "N",
} as const;

export const SMTP_FORCARCODIFICACAO_LABELS = {
	I: "I",
	U: "U",
	A: "A",
} as const;

export const SMTP_REMOVERXMAILER_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const smtpAutenticacaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "autenticacao: valores válidos são [S, N]" }),
});

export const smtpCodificacaoUtf8Schema = z.enum(["S", "N"], {
	error: () => ({ message: "codificacao_utf8: valores válidos são [S, N]" }),
});

export const smtpConexaoSslSchema = z.enum(["S", "T", "N"], {
	error: () => ({ message: "conexao_ssl: valores válidos são [S, T, N]" }),
});

export const smtpForcarCodificacaoSchema = z.enum(["I", "U", "A"], {
	error: () => ({
		message: "forcar_codificacao: valores válidos são [I, U, A]",
	}),
});

export const smtpRemoverXmailerSchema = z.enum(["S", "N"], {
	error: () => ({ message: "remover_xmailer: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SmtpAutenticacao = z.infer<typeof smtpAutenticacaoSchema>;

export type SmtpCodificacaoUtf8 = z.infer<typeof smtpCodificacaoUtf8Schema>;

export type SmtpConexaoSsl = z.infer<typeof smtpConexaoSslSchema>;

export type SmtpForcarCodificacao = z.infer<typeof smtpForcarCodificacaoSchema>;

export type SmtpRemoverXmailer = z.infer<typeof smtpRemoverXmailerSchema>;
