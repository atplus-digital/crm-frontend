/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	smsNumFixoSchema,
	smsRemoverCaracteresEspeciaisSchema,
	smsUtilizaShortcodeSchema,
	smsUtizarNovaApiSchema,
} from "./labels";

export const SMS_TABLE_NAME = "sms";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const smsBaseSchema = z.object({
	id: z.number(),
	adicionar_fila: z.number(),
	aggregate_id: z.string(),
	api: z.string(),
	api_id: z.string(),
	api_id_shortcode: z.string(),
	descricao: z.string(),
	inferface: z.string(),
	interface_mk: z.string(),
	ip: z.string(),
	max_caracteres: z.number(),
	num_fixo: smsNumFixoSchema,
	porta_chip_goip: z.string(),
	porta_mk: z.number(),
	remover_caracteres_especiais: smsRemoverCaracteresEspeciaisSchema,
	rota_saida: z.string(),
	senha: z.string(),
	tipo: z.number(),
	token: z.string(),
	url: z.string(),
	usuario: z.string(),
	utiliza_shortcode: smsUtilizaShortcodeSchema,
	utizar_nova_api: smsUtizarNovaApiSchema,
	versao: z.string(),
	webservice_version: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const smsSchema = smsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const smsCreateSchema = smsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const smsUpdateSchema = smsCreateSchema.partial();
