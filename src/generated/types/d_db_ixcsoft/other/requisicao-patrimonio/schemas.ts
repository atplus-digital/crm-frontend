/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const REQUISICAO_PATRIMONIO_TABLE_NAME = "requisicao_patrimonio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_patrimonioBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_trans_almox: z.number(),
	id_transf_wizard: z.number(),
	id_wizard: z.number(),
	quantidade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_patrimonioSchema = requisicao_patrimonioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_patrimonioCreateSchema =
	requisicao_patrimonioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_patrimonioUpdateSchema =
	requisicao_patrimonioCreateSchema.partial();
