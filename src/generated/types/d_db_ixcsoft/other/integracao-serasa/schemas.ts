/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	integracao_serasaIntermediadorSchema,
	integracao_serasaPlanoConsultaConnectSchema,
} from "./labels";

export const INTEGRACAO_SERASA_TABLE_NAME = "integracao_serasa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracao_serasaBaseSchema = z.object({
	id: z.number(),
	ambiente: z.number(),
	client_id: z.string(),
	client_secret: z.string(),
	codigo_baixa: z.number(),
	codigo_restricao: z.number(),
	codigo_restricao_creditonm: z.string(),
	cpf_inclusao: z.string(),
	data_atualizacao_token: z.string(),
	email: z.string(),
	envia_sms_inclusao: z.string(),
	id_filial: z.number(),
	inclusa_exclusao_automatica: z.number(),
	intermediador: integracao_serasaIntermediadorSchema,
	login: z.number(),
	plano_consulta_connect: integracao_serasaPlanoConsultaConnectSchema,
	plano_consulta_soa: z.string(),
	saldo: z.number(),
	senha: z.string(),
	senha_consulta: z.string(),
	senha_pefin: z.string(),
	token: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracao_serasaSchema = integracao_serasaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracao_serasaCreateSchema = integracao_serasaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracao_serasaUpdateSchema =
	integracao_serasaCreateSchema.partial();
