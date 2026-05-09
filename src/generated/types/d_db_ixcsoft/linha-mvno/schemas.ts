/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	linha_mvnoApiSchema,
	linha_mvnoEsimSchema,
	linha_mvnoPortabilidadeSchema,
} from "./labels";

export const LINHA_MVNO_TABLE_NAME = "linha_mvno";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const linha_mvnoBaseSchema = z.object({
	id: z.number(),
	api: linha_mvnoApiSchema,
	consulta_saldo: z.string(),
	dados_moveis: z.string(),
	data_agendamento: z.string(),
	data_recarga: z.string(),
	ddd_telefone: z.number(),
	dia_recorrencia: z.number(),
	esim: linha_mvnoEsimSchema,
	expiracao_dados: z.string(),
	id_account_mvno: z.string(),
	id_assinatura_cliente: z.number(),
	id_assinatura_cliente_produto: z.number(),
	id_contrato: z.number(),
	id_contrato_integracao: z.string(),
	id_customer_mvno: z.string(),
	id_integracao: z.number(),
	id_linha_integracao: z.string(),
	id_plano_integracao: z.string(),
	id_portabilidade_integracao: z.string(),
	id_prod_ixc_mvno: z.number(),
	link_esim: z.string(),
	login: z.string(),
	msisdn: z.string(),
	numero_telefone: z.string(),
	numero_temporario: z.string(),
	operadora_origem: z.string(),
	portabilidade: linha_mvnoPortabilidadeSchema,
	profile_mvno: z.string(),
	senha: z.string(),
	simcard: z.string(),
	sms: z.string(),
	status_aplicativo: z.string(),
	tipo_numero: z.string(),
	token_validacao: z.string(),
	voz: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const linha_mvnoSchema = linha_mvnoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const linha_mvnoCreateSchema = linha_mvnoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const linha_mvnoUpdateSchema = linha_mvnoCreateSchema.partial();
