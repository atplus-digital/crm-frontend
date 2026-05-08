/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { equipamentosBaseSchema } from "../equipamentos/schemas";
import { fornecedores_telecomBaseSchema } from "../fornecedores-telecom/schemas";
import { sitesBaseSchema } from "../sites/schemas";
import { telecom_anexosBaseSchema } from "../telecom-anexos/schemas";
import { telecom_colocation_opcoesBaseSchema } from "../telecom-colocation-opcoes/schemas";
import { telecom_interfacesBaseSchema } from "../telecom-interfaces/schemas";
import { telecom_opcoes_l2lBaseSchema } from "../telecom-opcoes-l2l/schemas";
import { telecom_racksBaseSchema } from "../telecom-racks/schemas";
import { telecom_transito_opcoesBaseSchema } from "../telecom-transito-opcoes/schemas";
import {
	telecom_recursosFinalidadeSchema,
	telecom_recursosStatusSchema,
	telecom_recursosTipoSchema,
} from "./labels";

export const T_TELECOM_RECURSOS_TABLE_NAME = "t_telecom_recursos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_recursosBaseSchema = z.object({
	id: z.number(),
	f_fk_anexos_recursos: z.number(),
	f_fk_cliente_recurso: z.number(),
	f_fk_fornecedor_recurso: z.number(),
	f_fk_rack_a: z.number(),
	f_fk_rack_b: z.number(),
	f_fk_site_a: z.number(),
	f_fk_site_b: z.number(),
	f_2ew016ynyo6: z.number(),
	f_contrato_ixc: z.number(),
	f_designacao_atplus: z.string(),
	f_designacao_externa: z.string(),
	f_detalhes: z.string(),
	f_finalidade: telecom_recursosFinalidadeSchema,
	f_id_produto: z.string(),
	f_nome: z.string(),
	f_status: telecom_recursosStatusSchema,
	f_tipo: telecom_recursosTipoSchema,
	parentId: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_recursosRelationSchema = z.object({
	children: z.lazy(() => telecom_recursosBaseSchema.array()),
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_anexos: z.lazy(() => telecom_anexosBaseSchema.array()),
	f_cliente: z.lazy(() => fornecedores_telecomBaseSchema.nullable()),
	f_equipamento_a: z.lazy(() => equipamentosBaseSchema.nullable()),
	f_fornecedor: z.lazy(() => fornecedores_telecomBaseSchema.nullable()),
	f_interface_ponta_a: z.lazy(() => telecom_interfacesBaseSchema.array()),
	f_interface_ponta_b: z.lazy(() => telecom_interfacesBaseSchema.array()),
	f_opcoes_colocation: z.lazy(() =>
		telecom_colocation_opcoesBaseSchema.nullable(),
	),
	f_opcoes_l2l: z.lazy(() => telecom_opcoes_l2lBaseSchema.nullable()),
	f_opcoes_link_ip: z.lazy(() => telecom_transito_opcoesBaseSchema.nullable()),
	f_rack_a: z.lazy(() => telecom_racksBaseSchema.nullable()),
	f_rack_b: z.lazy(() => telecom_racksBaseSchema.nullable()),
	f_site_a: z.lazy(() => sitesBaseSchema.nullable()),
	f_site_b: z.lazy(() => sitesBaseSchema.nullable()),
	parent: z.lazy(() => telecom_recursosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_recursosSchema = telecom_recursosBaseSchema.extend(
	telecom_recursosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_recursosCreateSchema = telecom_recursosSchema.omit({
	children: true,
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_anexos: true,
	f_cliente: true,
	f_equipamento_a: true,
	f_fornecedor: true,
	f_interface_ponta_a: true,
	f_interface_ponta_b: true,
	f_opcoes_colocation: true,
	f_opcoes_l2l: true,
	f_opcoes_link_ip: true,
	f_rack_a: true,
	f_rack_b: true,
	f_site_a: true,
	f_site_b: true,
	id: true,
	parent: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_recursosUpdateSchema =
	telecom_recursosCreateSchema.partial();
