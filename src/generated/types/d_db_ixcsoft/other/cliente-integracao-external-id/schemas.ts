/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_INTEGRACAO_EXTERNAL_ID_TABLE_NAME =
	"cliente_integracao_external_id";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_integracao_external_idBaseSchema = z.object({
	id: z.number(),
	data_criacao: z.string(),
	external_id: z.string(),
	id_cliente: z.number(),
	id_fn_carteira_cobranca: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_integracao_external_idSchema =
	cliente_integracao_external_idBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_integracao_external_idCreateSchema =
	cliente_integracao_external_idSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_integracao_external_idUpdateSchema =
	cliente_integracao_external_idCreateSchema.partial();
