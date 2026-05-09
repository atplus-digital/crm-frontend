/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	dados_bancariosContaPrincipalSchema,
	dados_bancariosMeioPagamentoPreferencialSchema,
	dados_bancariosTipoContaSchema,
	dados_bancariosTipoPessoaSchema,
	dados_bancariosTipoPixPreferencialSchema,
	dados_bancariosTipoRecebimentoSchema,
} from "./labels";

export const DADOS_BANCARIOS_TABLE_NAME = "dados_bancarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dados_bancariosBaseSchema = z.object({
	id: z.number(),
	agencia_dv: z.string(),
	banco: z.string(),
	camara_centralizadora: z.string(),
	cnpj_cpf: z.string(),
	cod_agencia: z.string(),
	cod_banco: z.string(),
	cod_conta: z.string(),
	cod_tipo_operacao: z.string(),
	conta_principal: dados_bancariosContaPrincipalSchema,
	id_fornecedor: z.number(),
	id_vendedor: z.number(),
	meio_pagamento_preferencial: dados_bancariosMeioPagamentoPreferencialSchema,
	numero_conta_dv: z.string(),
	pix_aleatorio: z.string(),
	pix_celular: z.string(),
	pix_cpf_cnpj: z.string(),
	pix_email: z.string(),
	tipo_conta: dados_bancariosTipoContaSchema,
	tipo_pessoa: dados_bancariosTipoPessoaSchema,
	tipo_pix_preferencial: dados_bancariosTipoPixPreferencialSchema,
	tipo_recebimento: dados_bancariosTipoRecebimentoSchema,
	titular: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dados_bancariosSchema = dados_bancariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dados_bancariosCreateSchema = dados_bancariosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dados_bancariosUpdateSchema =
	dados_bancariosCreateSchema.partial();
