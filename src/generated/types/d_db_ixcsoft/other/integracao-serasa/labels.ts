/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INTEGRACAOSERASA_FIELD_LABELS = {
	ambiente: "ambiente",
	client_id: "client_id",
	client_secret: "client_secret",
	codigo_baixa: "codigo_baixa",
	codigo_restricao: "codigo_restricao",
	codigo_restricao_creditonm: "codigo_restricao_creditonm",
	cpf_inclusao: "cpf_inclusao",
	data_atualizacao_token: "data_atualizacao_token",
	email: "email",
	envia_sms_inclusao: "envia_sms_inclusao",
	id: "id",
	id_filial: "id_filial",
	inclusa_exclusao_automatica: "inclusa_exclusao_automatica",
	intermediador: "intermediador",
	login: "login",
	plano_consulta_connect: "plano_consulta_connect",
	plano_consulta_soa: "plano_consulta_soa",
	saldo: "saldo",
	senha: "senha",
	senha_consulta: "senha_consulta",
	senha_pefin: "senha_pefin",
	token: "token",
} as const;

export const INTEGRACAOSERASA_INTERMEDIADOR_LABELS = {
	SOA: "SOA",
	CONNECT: "CONNECT",
	CREDITONM: "CREDITONM",
} as const;

export const INTEGRACAOSERASA_PLANOCONSULTACONNECT_LABELS = {
	TOP: "TOP",
	LIGHT: "LIGHT",
	AMBOS: "AMBOS",
	BASICA: "BASICA",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const integracao_serasaIntermediadorSchema = z.enum(
	["SOA", "CONNECT", "CREDITONM"],
	{
		error: () => ({
			message: "intermediador: valores válidos são [SOA, CONNECT, CREDITONM]",
		}),
	},
);

export const integracao_serasaPlanoConsultaConnectSchema = z.enum(
	["TOP", "LIGHT", "AMBOS", "BASICA"],
	{
		error: () => ({
			message:
				"plano_consulta_connect: valores válidos são [TOP, LIGHT, AMBOS, BASICA]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IntegracaoSerasaIntermediador = z.infer<
	typeof integracao_serasaIntermediadorSchema
>;

export type IntegracaoSerasaPlanoConsultaConnect = z.infer<
	typeof integracao_serasaPlanoConsultaConnectSchema
>;
