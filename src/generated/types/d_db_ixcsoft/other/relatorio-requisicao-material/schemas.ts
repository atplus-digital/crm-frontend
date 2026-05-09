/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_requisicao_materialTipoDataAberturaSchema,
	relatorio_requisicao_materialTipoDataCancelaSchema,
	relatorio_requisicao_materialTipoDataConfirmaSchema,
} from "./labels";

export const RELATORIO_REQUISICAO_MATERIAL_TABLE_NAME =
	"relatorio_requisicao_material";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_requisicao_materialBaseSchema = z.object({
	id: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_abertura_final: z.string(),
	data_abertura_inicial: z.string(),
	data_abertura_periodo: z.string(),
	data_cancela_final: z.string(),
	data_cancela_inicial: z.string(),
	data_cancela_periodo: z.string(),
	data_confirma_final: z.string(),
	data_confirma_inicial: z.string(),
	data_confirma_periodo: z.string(),
	data_ultima_impres: z.string(),
	id_almox: z.number(),
	id_filial: z.number(),
	id_mot_cancelamento: z.number(),
	id_requisicao: z.number(),
	id_requsicao: z.number(),
	id_tecnico: z.number(),
	id_tecnico_confirma: z.number(),
	id_usuario_cancelamento: z.number(),
	id_usuario_confirma: z.number(),
	impresso_por: z.number(),
	nome: z.string(),
	relatorio: z.string(),
	tipo_data_abertura: relatorio_requisicao_materialTipoDataAberturaSchema,
	tipo_data_cancela: relatorio_requisicao_materialTipoDataCancelaSchema,
	tipo_data_confirma: relatorio_requisicao_materialTipoDataConfirmaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_requisicao_materialSchema =
	relatorio_requisicao_materialBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_requisicao_materialCreateSchema =
	relatorio_requisicao_materialSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_requisicao_materialUpdateSchema =
	relatorio_requisicao_materialCreateSchema.partial();
