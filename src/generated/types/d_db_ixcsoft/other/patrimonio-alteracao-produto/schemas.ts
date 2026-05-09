/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_ALTERACAO_PRODUTO_TABLE_NAME =
	"patrimonio_alteracao_produto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_alteracao_produtoBaseSchema = z.object({
	id: z.number(),
	codigo_patrimonio: z.number(),
	data_inutilizacao: z.string(),
	id_contrato_comodato: z.number(),
	id_motivo_inutilizacao: z.number(),
	id_patrimonio: z.number(),
	id_requisicao: z.number(),
	id_usuario_inutilizacao: z.number(),
	situacao: z.number(),
	wizard: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_alteracao_produtoSchema =
	patrimonio_alteracao_produtoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_alteracao_produtoCreateSchema =
	patrimonio_alteracao_produtoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_alteracao_produtoUpdateSchema =
	patrimonio_alteracao_produtoCreateSchema.partial();
