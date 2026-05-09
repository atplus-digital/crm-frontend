/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRAL_CLIENTE_APROVACAO_TABLE_NAME = "central_cliente_aprovacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const central_cliente_aprovacaoBaseSchema = z.object({
	id: z.number(),
	data_hora_resposta: z.string(),
	data_hora_solicitacao: z.string(),
	id_cliente: z.number(),
	json_alteracao: z.string(),
	tipo_resposta: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const central_cliente_aprovacaoSchema =
	central_cliente_aprovacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const central_cliente_aprovacaoCreateSchema =
	central_cliente_aprovacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const central_cliente_aprovacaoUpdateSchema =
	central_cliente_aprovacaoCreateSchema.partial();
