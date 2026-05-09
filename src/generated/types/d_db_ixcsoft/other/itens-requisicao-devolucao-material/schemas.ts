/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ITENS_REQUISICAO_DEVOLUCAO_MATERIAL_TABLE_NAME =
	"itens_requisicao_devolucao_material";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const itens_requisicao_devolucao_materialBaseSchema = z.object({
	id: z.number(),
	fator_conversao: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_requisicao_devolucao_material: z.number(),
	id_unidade: z.number(),
	qtd: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const itens_requisicao_devolucao_materialSchema =
	itens_requisicao_devolucao_materialBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const itens_requisicao_devolucao_materialCreateSchema =
	itens_requisicao_devolucao_materialSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const itens_requisicao_devolucao_materialUpdateSchema =
	itens_requisicao_devolucao_materialCreateSchema.partial();
