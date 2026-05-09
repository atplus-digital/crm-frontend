/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ULTIMAS_ALTERACOES_SENHA_TABLE_NAME = "ultimas_alteracoes_senha";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ultimas_alteracoes_senhaBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	hash: z.string(),
	id_usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ultimas_alteracoes_senhaSchema =
	ultimas_alteracoes_senhaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ultimas_alteracoes_senhaCreateSchema =
	ultimas_alteracoes_senhaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ultimas_alteracoes_senhaUpdateSchema =
	ultimas_alteracoes_senhaCreateSchema.partial();
