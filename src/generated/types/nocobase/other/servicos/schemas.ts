/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { servicosStatusSchema, servicosTipoSchema } from "./labels";

export const T_SERVICOS_TABLE_NAME = "t_servicos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const servicosBaseSchema = z.object({
	id: z.number(),
	f_fk_servico_x_contrato: z.number(),
	f_id_contrato_ixc: z.string(),
	f_id_servico_ixc: z.string(),
	f_caracteristicas: z.string(),
	f_descricao: z.string(),
	f_designacao_atplus: z.string(),
	f_designacao_externa: z.string(),
	f_propriedades: z.string(),
	f_status: servicosStatusSchema,
	f_tipo: servicosTipoSchema,
	f_velocidade: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const servicosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_acessos: z.number().array(),
	f_arquivos: z.number().array(),
	f_kyyzn4kut6e: z.number().nullable(),
	f_rj1pckkkeqi: servicosBaseSchema.array(),
	f_servicos_relacionados: servicosBaseSchema.array(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servicosSchema = servicosBaseSchema.merge(servicosRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servicosCreateSchema = servicosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_acessos: true,
	f_arquivos: true,
	f_kyyzn4kut6e: true,
	f_rj1pckkkeqi: true,
	f_servicos_relacionados: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servicosUpdateSchema = servicosCreateSchema.partial();
