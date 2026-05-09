/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	sva_configuracoesAmbienteSchema,
	sva_configuracoesUsuarioAutomaticoSchema,
} from "./labels";

export const SVA_CONFIGURACOES_TABLE_NAME = "sva_configuracoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sva_configuracoesBaseSchema = z.object({
	id: z.number(),
	ambiente: sva_configuracoesAmbienteSchema,
	api_key: z.string(),
	api_secret: z.string(),
	data_atualizacao_token: z.string(),
	external_id: z.string(),
	id_filial_cobranca: z.number(),
	login: z.string(),
	plataforma: z.string(),
	refresh_token: z.string(),
	senha: z.string(),
	seu_prefixo: z.string(),
	token: z.string(),
	url: z.string(),
	usuario_automatico: sva_configuracoesUsuarioAutomaticoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sva_configuracoesSchema = sva_configuracoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sva_configuracoesCreateSchema = sva_configuracoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sva_configuracoesUpdateSchema =
	sva_configuracoesCreateSchema.partial();
