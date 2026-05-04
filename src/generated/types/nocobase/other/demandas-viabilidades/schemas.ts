/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	demandas_viabilidadesFormaAtendimentoSchema,
	demandas_viabilidadesServicoPretendidoSchema,
	demandas_viabilidadesStatusSchema,
} from "./labels";

export const T_DEMANDAS_VIABILIDADES_TABLE_NAME = "t_demandas_viabilidades";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const demandas_viabilidadesBaseSchema = z.object({
	id: z.number(),
	f_fk_viabilidades: z.number(),
	f_custo_recorrente: z.number(),
	f_endereco: z.string(),
	f_forma_atendimento: demandas_viabilidadesFormaAtendimentoSchema,
	f_localizacao: z.string(),
	f_servico_pretendido: demandas_viabilidadesServicoPretendidoSchema,
	f_status: demandas_viabilidadesStatusSchema,
	f_valor_investimento: z.number(),
	f_velocidade_pretendida: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const demandas_viabilidadesRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const demandas_viabilidadesSchema =
	demandas_viabilidadesBaseSchema.merge(demandas_viabilidadesRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const demandas_viabilidadesCreateSchema =
	demandas_viabilidadesSchema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const demandas_viabilidadesUpdateSchema =
	demandas_viabilidadesCreateSchema.partial();
