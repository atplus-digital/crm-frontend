/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { assinatura_integracaoTipoSchema } from "./labels";

export const ASSINATURA_INTEGRACAO_TABLE_NAME = "assinatura_integracao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_integracaoBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	create_time: z.string(),
	data_atualizacao_token: z.string(),
	data_sincronizacao: z.string(),
	descricao: z.string(),
	host: z.string(),
	id_filial: z.number(),
	integracao: z.string(),
	key_api: z.string(),
	login: z.string(),
	operador: z.string(),
	plataforma: z.string(),
	porta: z.number(),
	secret: z.string(),
	senha: z.string(),
	session_id: z.string(),
	tipo: assinatura_integracaoTipoSchema,
	token: z.string(),
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_integracaoSchema = assinatura_integracaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_integracaoCreateSchema =
	assinatura_integracaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_integracaoUpdateSchema =
	assinatura_integracaoCreateSchema.partial();
