/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	configuracao_mvnoAmbienteSchema,
	configuracao_mvnoIntegracaoSchema,
} from "./labels";

export const CONFIGURACAO_MVNO_TABLE_NAME = "configuracao_mvno";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const configuracao_mvnoBaseSchema = z.object({
	id: z.number(),
	ambiente: configuracao_mvnoAmbienteSchema,
	client_id: z.string(),
	client_secret: z.string(),
	data_atualizacao_token: z.string(),
	external_id: z.string(),
	integracao: configuracao_mvnoIntegracaoSchema,
	login: z.string(),
	mvna: z.string(),
	refresh_token: z.string(),
	senha: z.string(),
	token: z.string(),
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const configuracao_mvnoSchema = configuracao_mvnoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const configuracao_mvnoCreateSchema = configuracao_mvnoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const configuracao_mvnoUpdateSchema =
	configuracao_mvnoCreateSchema.partial();
