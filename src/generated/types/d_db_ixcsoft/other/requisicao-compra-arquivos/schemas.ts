/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const REQUISICAO_COMPRA_ARQUIVOS_TABLE_NAME =
	"requisicao_compra_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_compra_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_requisicao_compra: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_compra_arquivosSchema =
	requisicao_compra_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_compra_arquivosCreateSchema =
	requisicao_compra_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_compra_arquivosUpdateSchema =
	requisicao_compra_arquivosCreateSchema.partial();
