/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	smtpAutenticacaoSchema,
	smtpCodificacaoUtf8Schema,
	smtpConexaoSslSchema,
	smtpForcarCodificacaoSchema,
	smtpRemoverXmailerSchema,
} from "./labels";

export const SMTP_TABLE_NAME = "smtp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const smtpBaseSchema = z.object({
	id: z.number(),
	assunto_envio: z.string(),
	autenticacao: smtpAutenticacaoSchema,
	bcc_email: z.string(),
	codificacao_utf8: smtpCodificacaoUtf8Schema,
	conexao_ssl: smtpConexaoSslSchema,
	destino_envio: z.string(),
	forcar_codificacao: smtpForcarCodificacaoSchema,
	limite_dia: z.number(),
	limite_hora: z.number(),
	porta: z.number(),
	remetente: z.string(),
	remover_xmailer: smtpRemoverXmailerSchema,
	responsavel_envio: z.string(),
	senha: z.string(),
	servidor_saida: z.string(),
	texto_envio: z.string(),
	usuario: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const smtpSchema = smtpBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const smtpCreateSchema = smtpSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const smtpUpdateSchema = smtpCreateSchema.partial();
