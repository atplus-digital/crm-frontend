/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LINHAMVNO_FIELD_LABELS = {
	api: "api",
	consulta_saldo: "consulta_saldo",
	dados_moveis: "dados_moveis",
	data_agendamento: "data_agendamento",
	data_recarga: "data_recarga",
	ddd_telefone: "ddd_telefone",
	dia_recorrencia: "dia_recorrencia",
	esim: "esim",
	expiracao_dados: "expiracao_dados",
	id: "id",
	id_account_mvno: "id_account_mvno",
	id_assinatura_cliente: "id_assinatura_cliente",
	id_assinatura_cliente_produto: "id_assinatura_cliente_produto",
	id_contrato: "id_contrato",
	id_contrato_integracao: "id_contrato_integracao",
	id_customer_mvno: "id_customer_mvno",
	id_integracao: "id_integracao",
	id_linha_integracao: "id_linha_integracao",
	id_plano_integracao: "id_plano_integracao",
	id_portabilidade_integracao: "id_portabilidade_integracao",
	id_prod_ixc_mvno: "id_prod_ixc_mvno",
	link_esim: "link_esim",
	login: "login",
	msisdn: "msisdn",
	numero_telefone: "numero_telefone",
	numero_temporario: "numero_temporario",
	operadora_origem: "operadora_origem",
	portabilidade: "portabilidade",
	profile_mvno: "profile_mvno",
	senha: "senha",
	simcard: "simcard",
	sms: "sms",
	status_aplicativo: "status_aplicativo",
	tipo_numero: "tipo_numero",
	token_validacao: "token_validacao",
	voz: "voz",
} as const;

export const LINHAMVNO_API_LABELS = {
	A: "A",
	I: "I",
} as const;

export const LINHAMVNO_ESIM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const LINHAMVNO_PORTABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const linha_mvnoApiSchema = z.enum(["A", "I"], {
	error: () => ({ message: "api: valores válidos são [A, I]" }),
});

export const linha_mvnoEsimSchema = z.enum(["S", "N"], {
	error: () => ({ message: "esim: valores válidos são [S, N]" }),
});

export const linha_mvnoPortabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "portabilidade: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LinhaMvnoApi = z.infer<typeof linha_mvnoApiSchema>;

export type LinhaMvnoEsim = z.infer<typeof linha_mvnoEsimSchema>;

export type LinhaMvnoPortabilidade = z.infer<
	typeof linha_mvnoPortabilidadeSchema
>;
