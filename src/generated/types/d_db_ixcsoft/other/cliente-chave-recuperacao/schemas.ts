/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_chave_recuperacaoLocalRecuperacaoSchema,
	cliente_chave_recuperacaoStatusCodigoSchema,
	cliente_chave_recuperacaoTipoRecuperacaoSchema,
} from "./labels";

export const CLIENTE_CHAVE_RECUPERACAO_TABLE_NAME = "cliente_chave_recuperacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_chave_recuperacaoBaseSchema = z.object({
	id: z.number(),
	codigo_recuperacao: z.string(),
	data_hora_geracao: z.string(),
	data_hora_utilizacao: z.string(),
	id_chave: z.number(),
	id_usuario_liberacao: z.number(),
	local_recuperacao: cliente_chave_recuperacaoLocalRecuperacaoSchema,
	motivo_recuperacao: z.string(),
	status_codigo: cliente_chave_recuperacaoStatusCodigoSchema,
	tipo_recuperacao: cliente_chave_recuperacaoTipoRecuperacaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_chave_recuperacaoSchema =
	cliente_chave_recuperacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_chave_recuperacaoCreateSchema =
	cliente_chave_recuperacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_chave_recuperacaoUpdateSchema =
	cliente_chave_recuperacaoCreateSchema.partial();
