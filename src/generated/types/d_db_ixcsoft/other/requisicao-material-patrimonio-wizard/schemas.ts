/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { requisicao_material_patrimonio_wizardStatusSchema } from "./labels";

export const REQUISICAO_MATERIAL_PATRIMONIO_WIZARD_TABLE_NAME =
	"requisicao_material_patrimonio_wizard";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_material_patrimonio_wizardBaseSchema = z.object({
	id: z.number(),
	gerar_qtd_patrimonio: z.number(),
	id_almox_destino: z.number(),
	id_almox_origem: z.number(),
	id_filial_destino: z.number(),
	id_filial_origem: z.number(),
	id_trans_almox: z.number(),
	status: requisicao_material_patrimonio_wizardStatusSchema,
	total_produtos: z.number(),
	total_produtos_patrimonio: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_material_patrimonio_wizardSchema =
	requisicao_material_patrimonio_wizardBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_material_patrimonio_wizardCreateSchema =
	requisicao_material_patrimonio_wizardSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_material_patrimonio_wizardUpdateSchema =
	requisicao_material_patrimonio_wizardCreateSchema.partial();
