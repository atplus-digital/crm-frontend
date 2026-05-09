/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const REQUISICAO_DEVOLUCAO_MATERIAL_TABLE_NAME =
	"requisicao_devolucao_material";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_devolucao_materialBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	data_confirmacao: z.string(),
	id_almox_destino: z.number(),
	id_almox_origem: z.number(),
	id_filial_destino: z.number(),
	id_filial_origem: z.number(),
	id_funcionario: z.number(),
	id_funcionario_destino: z.number(),
	observacao: z.string(),
	status: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_devolucao_materialSchema =
	requisicao_devolucao_materialBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_devolucao_materialCreateSchema =
	requisicao_devolucao_materialSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_devolucao_materialUpdateSchema =
	requisicao_devolucao_materialCreateSchema.partial();
