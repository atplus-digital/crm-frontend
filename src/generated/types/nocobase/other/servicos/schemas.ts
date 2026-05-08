/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { acessosBaseSchema } from "../acessos/schemas";
import { telecom_anexosBaseSchema } from "../telecom-anexos/schemas";
import { telecom_contratosBaseSchema } from "../telecom-contratos/schemas";
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
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const servicosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_acessos: z.lazy(() => acessosBaseSchema.array()),
	f_arquivos: z.lazy(() => telecom_anexosBaseSchema.array()),
	f_kyyzn4kut6e: z.lazy(() => telecom_contratosBaseSchema.nullable()),
	f_rj1pckkkeqi: z.lazy(() => servicosBaseSchema.array()),
	f_servicos_relacionados: z.lazy(() => servicosBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servicosSchema = servicosBaseSchema.extend(
	servicosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servicosCreateSchema = servicosSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_acessos: true,
	f_arquivos: true,
	f_kyyzn4kut6e: true,
	f_rj1pckkkeqi: true,
	f_servicos_relacionados: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servicosUpdateSchema = servicosCreateSchema.partial();
