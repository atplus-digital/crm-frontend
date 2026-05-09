/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_requisicao_material_itemTipoDataCancelamentoSchema,
	relatorio_requisicao_material_itemTipoDataSchema,
} from "./labels";

export const RELATORIO_REQUISICAO_MATERIAL_ITEM_TABLE_NAME =
	"relatorio_requisicao_material_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_requisicao_material_itemBaseSchema = z.object({
	id: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_cancelamento_final: z.string(),
	data_cancelamento_inicial: z.string(),
	data_cancelamento_periodo: z.string(),
	data_final: z.string(),
	data_inicial: z.string(),
	data_periodo: z.string(),
	data_ultima_impres: z.string(),
	id_almox: z.number(),
	id_produto: z.number(),
	id_requisicao: z.string(),
	id_tecnico: z.number(),
	impresso_por: z.number(),
	nome: z.string(),
	relatorio: z.string(),
	tipo_data: relatorio_requisicao_material_itemTipoDataSchema,
	tipo_data_cancelamento:
		relatorio_requisicao_material_itemTipoDataCancelamentoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_requisicao_material_itemSchema =
	relatorio_requisicao_material_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_requisicao_material_itemCreateSchema =
	relatorio_requisicao_material_itemSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_requisicao_material_itemUpdateSchema =
	relatorio_requisicao_material_itemCreateSchema.partial();
